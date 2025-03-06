const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const app = express();

// Definição do Schema (tipo e query)
const typeDefs = gql`
  type Query {
    hello: String
  }
    type Query {
    TSI: String
  }
`;

// Resolvers (como responder às queries)
const resolvers = {
  Query: {
    hello: () => "Olá, GraphQL!",
    TSI: () => "Olá, Sistemas para internet!"
  },
};

// Criando o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("🚀 Servidor rodando em http://localhost:4000/graphql");
  });
}

startServer();
