import React from 'react';
import { TitleMessage, OrderIdMessage, BackToShoppingMessage,Image } from './style';
import {GlobalStyle} from '../styles/GlobalStyle'
import { WrapperContainer } from '../components/Container';
import {Link} from '@reach/router'
import screen from '../media/images/screen.png'

export const ConfirmationPage = () =>{

    return(
        <WrapperContainer>
            <GlobalStyle />
            <TitleMessage>Thank you!</TitleMessage>
            <OrderIdMessage>Your order ... has been registered</OrderIdMessage>
            <Link to='/'>
            <BackToShoppingMessage >Continue shopping</BackToShoppingMessage>
            </Link>
            <Image src={screen} />
        </WrapperContainer>
    );

};