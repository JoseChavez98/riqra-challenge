import React from 'react';
import { Container, Icon, TitleMessage, STitleMessage } from './style';
import { ShoppingCartIcon } from '../Icons/ShoppingCartIcon';
import { useQuery } from '@apollo/react-hooks';
import {Product} from '../Product';
import gql from 'graphql-tag';

const GET_PRODUCTS = gql`
  query getProductsByName($name: String!) {
    productsByName(name: $name) {
      id
      name
      photoUrl
      price
    }
  }
`;


const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const GET_SEARCH_VALUE = gql`
  {
    searchValue @client
  }
`;


export const ShoppingCart = () => {

  const { data: result } = useQuery(GET_SEARCH_VALUE);
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: { name: result.searchValue },
  });

  console.log(loading);

  const { data: cart } = useQuery(GET_CART_ITEMS);

  if (loading) {
    return (
      <Container>
        <STitleMessage>Loading...</STitleMessage>
      </Container>
    );
  }
  if (error) {
    console.log(error);
    return( 
    <Container>
    <STitleMessage>Error</STitleMessage>
    </Container>
    )
    ;
  }

  return (
    <Container>

      {!result.searchValue && !cart.cartItems.length && (
        <>
          <Icon>
            <ShoppingCartIcon />
          </Icon>
          <TitleMessage>Your Cart is empty</TitleMessage>
          <STitleMessage>Seems like you haven't chosen what to buy...</STitleMessage>
        </>
      )}

      {result.searchValue
        ? data.productsByName.map(item => <Product {...item} key={item.id} />)
        : cart.cartItems.map(item => (
          <Product {...item} key={item.id} isInCart={true} />
        ))}

    </Container>
  )

}