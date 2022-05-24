import { GraphQLServer } from "graphql-yoga";
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const server = new GraphQLServer({
  resolvers,
  typeDefs
});

server.start({ port: 3000 }, ({ port }) => {
  console.log("Server on port", port);
});
