'use client'
import './globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { createApolloClient } from "./api/apolloClient"; 
import Providers from './providers'
import Header from './components/header'
import Sidebar from './components/Sidebar'
import { ApolloWrapper } from './api/apollo-provider';


export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <ApolloWrapper>
      <html lang='en'>
        <body>
      <Providers> 
        <Header />
        <Sidebar />
        <main>
          {children}
        </main>
      </Providers>
      </body>
      </html>
    </ApolloWrapper>
  );
}