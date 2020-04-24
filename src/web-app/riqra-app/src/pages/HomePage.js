import React from 'react'
import { WrapperContainer } from '../components/Container'
import { GlobalStyle } from '../styles/GlobalStyle'
import {SearchProducts} from '../components/SearchProducts'
import {ShoppingCart} from "../components/ShoppingCart"
import {ShipmentDate} from "../components/ShipmentDate"
import {PaymentSummary} from "../components/PaymentSummary"

export const HomePage = () => {
    return (
        <WrapperContainer>
            <GlobalStyle />
            <SearchProducts />
            <ShoppingCart />
            <ShipmentDate />
            <PaymentSummary />  

        </WrapperContainer>
    )
}