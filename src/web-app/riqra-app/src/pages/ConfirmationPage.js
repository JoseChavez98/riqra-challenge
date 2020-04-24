import React from 'react';
import { TitleMessage, OrderIdMessage, BackToShoppingMessage, Image, OrderNumber } from './style';
import { GlobalStyle } from '../styles/GlobalStyle'
import { WrapperContainer } from '../components/Container';
import { Link } from '@reach/router'
import screen from '../media/images/screen.png'

export const ConfirmationPage = (props) => {

    return (
        <WrapperContainer>
            <GlobalStyle />
            <TitleMessage>Thank you!</TitleMessage>
            <OrderIdMessage>Your order {' '}
                <OrderNumber>P{props.location.state.orderId.padStart(4, '000')}</OrderNumber>{' '}
            has been registered</OrderIdMessage>
            <Link to='/'>
                <BackToShoppingMessage >Continue shopping</BackToShoppingMessage>
            </Link>
            <Image src={screen} />
        </WrapperContainer>
    );

};