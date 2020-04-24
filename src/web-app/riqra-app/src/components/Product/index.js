import React, { useState } from 'react';
import {
  Container,
  Price,
  Name,
  Image,
  Divider,
  Button,
  Overlay,
  Delete,
} from './style';
import { Count } from '../Count';
import { AddIcon } from '../Icons/AddIcon';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const ADD_TO_CART = gql`
  mutation addToCart($product: Product!) {
    addToCart(product: $product) @client
  }
`;
const REMOVE_FROM_CART = gql`
  mutation removeFromCart($product: Product!) {
    removeFromCart(product: $product) @client
  }
`;

export const Product = props => {
  const { id, photoUrl, name, price, quantity, isInCart } = props;
  const [counterVisible, setCounterVisible] = useState(false);
  const [addToCart, { loading, error }] = useMutation(ADD_TO_CART, {
    variables: { product: props },
  });
  const [removeFromCart] = useMutation(REMOVE_FROM_CART, {
    variables: { product: props },
  });

  const handleClick = () => {
    if (isInCart) {
      setCounterVisible(!counterVisible);
    }
  };

  return (
    <Container>
      {counterVisible && <Overlay onClick={handleClick} />}
      {!isInCart ? (
        <Button onClick={addToCart} children={<AddIcon />} />
      ) : (
        <>
          <Count
            productId={id}
            quantity={quantity}
            counterVisible={counterVisible}
            setCounterVisible={setCounterVisible}
          />
          <Delete onClick={removeFromCart}>Delete</Delete>
        </>
      )}
      <Container onClick={handleClick}>
        <Image src={photoUrl} />
        <Name>{name}</Name>
        <Price>${price.toFixed(2)}</Price>

        <Divider />
      </Container>
    </Container>
  );
};
