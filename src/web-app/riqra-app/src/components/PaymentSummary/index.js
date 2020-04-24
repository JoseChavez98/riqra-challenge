import React from 'react';
import {
  Container,
  Button,
  SummaryContainer,
  PriceLineContainer,
  Label,
  Value,
} from './style';

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

  return (
    <SummaryContainer>
      <PriceLine label="Products" value={0} />
      <PriceLine label="Shipping Cost" value={0} highlighted boldLabel />
      <PriceLine label="Taxes" value={0} />
      <PriceLine label="Total" value={51} total />
    </SummaryContainer>
  );
};

export const PaymentSummary = () => {

  return (
    <Container>
      <Summary {...0} />
      <Button total={51} >
        COMPLETE ORDER
      </Button>
    </Container>
  );
};