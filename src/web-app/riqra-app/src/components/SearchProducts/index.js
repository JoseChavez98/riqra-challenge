import React from 'react'
// import ApolloClient from 'apollo-boost';
import { InputForm } from './style'
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_SEARCH_PRODUCTS = gql`{
    searchValue @client
}`;

export const SearchProducts = () => {

    const client = useApolloClient();

    const { data } = useQuery(GET_SEARCH_PRODUCTS);
    const { searchValue } = data;

    const handleChange = (props) => {
        const { value } = props.target;
        client.writeData({ data: { searchValue: value } })
    }

    return (
        <InputForm placeholder="Search Product ..."
            value={searchValue}
            onChange={handleChange}
        ></InputForm>
    )
}