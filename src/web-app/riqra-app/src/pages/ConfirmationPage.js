import React from 'react';
import { TitleMessage, OrderIdMessage, BackToShoppingMessage, Image, OrderNumber } from './style';
import { GlobalStyle } from '../styles/GlobalStyle'
import { WrapperContainer } from '../components/Container';
import { Link } from '@reach/router'
import screen from '../media/images/screen.png'
import {cache,initialState} from '../index'

export const ConfirmationPage = (props) => {
    var pId = String(props.location.state.orderId);
    var id = pId.padStart(4, '000');

    var clear = () =>{
        cache.writeData({
            data: initialState,
          });
    }
    return (
        <WrapperContainer>
            <GlobalStyle />
            <TitleMessage>Thank you!</TitleMessage>
            <OrderIdMessage>
        Your Order{' '}
        <OrderNumber>

          P{id.padStart(4, '000')}
        </OrderNumber>{' '}
        has been registered
      </OrderIdMessage>
            <Link to='/'>
                {clear}
                <BackToShoppingMessage >Continue shopping</BackToShoppingMessage>
            </Link>
            <Image src={screen} />
        </WrapperContainer>
    );

};