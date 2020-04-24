import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { typeDefs, resolvers } from './resolvers';
import { ApolloProvider } from '@apollo/react-hooks';

const cache = new InMemoryCache({});
const link = new HttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
  connectToDevTools: true,
});

const initialState = {
  cartItems: [],
  searchValue: '',
};

cache.writeData({
  data: initialState,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

