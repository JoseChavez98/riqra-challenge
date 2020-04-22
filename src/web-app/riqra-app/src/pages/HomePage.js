import React from 'react'
import { WrapperContainer } from '../components/Container'
import { GlobalStyle } from '../styles/GlobalStyle'

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