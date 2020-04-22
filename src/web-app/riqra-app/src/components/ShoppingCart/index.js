import React from 'react'
import {Container, Icon, TitleMessage, STitleMessage} from './style';
import {ShoppingCartIcon} from '../Icons/ShoppingCartIcon'


export const  ShoppingCart = () => {
    return(
    <Container>
        <Icon > 
            <ShoppingCartIcon />
        </Icon>
        <TitleMessage>Your cart is empty</TitleMessage>
        <STitleMessage>Seems like you haven't chosen what to buy...</STitleMessage>
    </Container>
    )
}