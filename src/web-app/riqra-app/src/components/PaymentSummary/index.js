import React from 'react';
import {
  Container,
  Button,
  SummaryContainer,
  PriceLineContainer,
  Label,
  Value,
} from './style';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { navigate } from '@reach/router';
import { getShipmentDate } from '../ShipmentDate';


const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const CREATE_PURCHASE = gql`
  mutation createPurchase(
    $subtotal: Float
    $taxes: Float
    $shipping: Float
    $total: Float
    $deliveryDate: String
    $products: [ProductId]
  ) {
    createPurchase(
      subtotal: $subtotal
      taxes: $taxes
      shipping: $shipping
      total: $total
      deliveryDate: $deliveryDate
      products: $products
    ) {
      id
      total
    }
  }
`;


const formatPrice = value => value.toFixed(2);

const PriceLine = (props) => {
  const { total, highlighted, boldLabel, value } = props;
  return (
    <PriceLineContainer total={total} highlighted={highlighted}>
      <Label total={total} bold={boldLabel}>
        {props.label}
      </Label>
      <Value total={total}>${formatPrice(value)}</Value>
    </PriceLineContainer>
  );
};

const Summary = (props) => {
  const { subtotal, shipping, taxes, total } = props;

  return (
    <SummaryContainer>
      <PriceLine label="Products" value={subtotal} />
      <PriceLine label="Shipping Cost" value={shipping} boldLabel />
      <PriceLine label="Taxes" value={taxes} highlighted />
      <PriceLine label="Total" value={total} total />
    </SummaryContainer>
  );
};

export const PaymentSummary = () => {

  const { data: items } = useQuery(GET_CART_ITEMS);
  const subtotal =
    items.cartItems.length &&
    items.cartItems.reduce(
      (sum, { quantity, price }) => sum + quantity * price,
      0,
    );
  const taxes = subtotal * 0.18;
  const shipping = subtotal * 0.1;
  const total = subtotal + shipping;
  const pricing = {
    subtotal,
    taxes,
    shipping,
    total,
  };

  const productIds = items.cartItems.map(({ id }) => ({ id: parseInt(id) }));

  const deliveryDate = getShipmentDate().toISOString();

  const [mutate] = useMutation(CREATE_PURCHASE, {
    variables: {
      subtotal,
      taxes,
      shipping,
      total,
      deliveryDate,
      products: productIds,
    },
  });

  const completePurchase = async () => {
    if (total >= 50) {
      // console.log(mutate.orderId);
      // navigate('/confirmation',{ state: { orderId: data.createOrder.id } });

      mutate().then(({ data }) => {
        navigate('/confirmation', { state: { orderId: data.createPurchase.id } });
      });
      // .catch((data) => {
      //   const errors = data.graphQLErrors.map(error => error.message);
      //   this.setState({
      //     errors,
      //   });
      // });
    }
  };
  return (
    <Container>
      <Summary {...pricing} />
      <Button total={total} onClick={completePurchase} >
        COMPLETE ORDER
      </Button>
    </Container>
  );
}