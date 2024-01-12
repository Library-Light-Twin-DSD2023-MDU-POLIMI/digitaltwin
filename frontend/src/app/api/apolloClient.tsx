'use client'

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://lcqhi8sll4.execute-api.eu-north-1.amazonaws.com/',
      fetch,
    }),
    cache: new InMemoryCache(),
  })
}
