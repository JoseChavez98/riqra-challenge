import gql from 'graphql-tag';

export const typeDefs = gql`
extend type Query {
    items: [ID!]!
    cartItems: [Product]
    searchItems: [Product]
  }

  extend type Product {
    isInCart: Boolean!
    quantity: Int
    taxes: Float
    shipping: Float
    total: Float
  }

  extend type Mutation {
    addToCart(product: Product!): [Product]
    removeFromCart(product: Product!): [Product]
    updateQuantity(productId: ID!, action: String): Product
  }
`;

const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const GET_SEARCH_VALUE = gql`
  {
    searchValue @client
  }
`;

export const resolvers = {
    Mutation: {
        addToCart: (_, { product }, { cache }) => {
            const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

            const isInCart = cartItems.some(item => item.id === product.id);

            cache.writeQuery({
                query: GET_SEARCH_VALUE,
                data: { searchValue: '' },
            });

            const data = {
                cartItems: !isInCart
                    ? [...cartItems, { ...product, quantity: 1 }]
                    : [
                        ...cartItems.map(item => {
                            if (item.id === product.id) {
                                return {
                                    ...item,
                                    quantity: item.quantity + 1,
                                };
                            }
                            return item;
                        }),
                    ],
            };
            cache.writeQuery({ query: GET_CART_ITEMS, data });
            return data.cartItems;
        },
        removeFromCart: (_, { product }, { cache }) => {
            const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

            const data = {
                cartItems: cartItems.filter(item => item.id !== product.id),
            };
            cache.writeQuery({ query: GET_CART_ITEMS, data });
            return data.cartItems;
        },

        updateQuantity: (_, { productId, action }, { cache }) => {
            const { cartItems } = cache.readQuery({ query: GET_CART_ITEMS });

            const data = {
                cartItems: cartItems.map(item => {
                    if (item.id === productId) {
                        const { quantity } = item;
                        return {
                            ...item,
                            quantity: action === 'minus' ? quantity - 1 : quantity + 1,
                        };
                    }
                    return item;
                }),
            };

            cache.writeQuery({ query: GET_CART_ITEMS, data });
            return data.cartItems[0];
        },
    },
};
