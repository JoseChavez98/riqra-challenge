import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  height: 106px;
  position: relative;
  user-select: none;
`;

export const Div = styled.div`
  position: relative;
`;

export const Image = styled.img`
  position: absolute;
  width: 80px;
  height: 74px;
  left: 16px;
  top: 16px;
`;

export const Price = styled.p`
  position: absolute;
  width: 194px;
  height: 32px;
  left: 112px;
  top: 58px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21.3333px;
  line-height: 32px;

  color: #ff2d55;
`;

export const Name = styled.p`
  position: absolute;
  width: 125px;
  height: 24px;
  left: 112px;
  top: 16px;

  /* h5Regular */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  color: #333333;
`;

export const Button = styled.button`
  position: absolute;
  width: 48px;
  height: 48px;
  right: 16px;
  top: 29px;
  background: #ff8000;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 16px;
  z-index: 2;
`;

export const Divider = styled.div`
  position: absolute;
  height: 1px;
  left: 0px;
  right: 0px;
  top: 105px;
  background: #dddddd;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 360px;
  height: 106px;

  /* white */

  background: #ffffff;
  opacity: 0.9;
  z-index: 2;
`;

export const Delete = styled.h6`
  position: absolute;
  width: 35px;
  height: 18px;
  right: 22px;
  top: 70px;

  /* h6Regular */

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;
  margin-top: 0;

  /* black */

  color: #333333;
  cursor: pointer;
  z-index: 1;
`;
