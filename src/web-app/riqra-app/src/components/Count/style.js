import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 180px;
  height: 48px;
  right: 16px;
  top: 29px;
  background: #ff8000;
  border-radius: 4px;
  z-index: 3;
`;

export const Button = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: 18px;
  background: #ff8000;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 16px;
`;

export const Quantity = styled.p`
  position: absolute;
  width: 68px;
  height: 24px;
  left: calc(50% - 68px / 2);
  top: calc(50% - 24px / 2 + 1px);

  /* h5Semibold */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* white */

  color: #ffffff;
  user-select: none;
`;

export const MinusIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 16px;
  top: 12px;
  cursor: pointer;
`;

export const PlusIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  right: 16px;
  top: 12px;
  cursor: pointer;
`;
