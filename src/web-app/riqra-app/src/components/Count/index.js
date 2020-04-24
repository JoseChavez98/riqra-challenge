import React from 'react';
import { Container, Quantity, Button, MinusIcon, PlusIcon } from './style';
import { DeleteIcon } from '../Icons/DeleteIcon';
import { AddIcon } from '../Icons/AddIcon';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const UPDATE_QUANTITY = gql`
  mutation updateQuantity($productId: ID!, $action: String) {
    updateQuantity(productId: $productId, action: $action) @client
  }
`;

export const Count = props => {
  const { productId, quantity, counterVisible, setCounterVisible } = props;

  const [mutate] = useMutation(UPDATE_QUANTITY, { variables: { productId } });

  const handleClick = () => {
    setCounterVisible(true);
  };

  const increaseQuantity = () => {
    mutate({ variables: { action: 'AddIcon' } });
  };
  const decreaseQuantity = () => {
    quantity > 1 && mutate({ variables: { action: 'DeleteIcon' } });
  };

  if (!counterVisible) {
    return <Button onClick={handleClick}>{quantity}</Button>;
  }

  return (
    <Container>
      <MinusIcon children={<DeleteIcon />} onClick={decreaseQuantity} />
      <Quantity>{quantity}</Quantity>
      <PlusIcon children={<AddIcon />} onClick={increaseQuantity} />
    </Container>
  );
};
