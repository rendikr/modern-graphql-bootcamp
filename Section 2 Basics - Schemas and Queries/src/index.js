import { GraphQLServer } from 'graphql-yoga';

// Type definitions
const typeDefs = `
  type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
  }
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    },
    name() {
      return 'Rendi K. R.'
    },
    location() {
      return 'Indonesia'
    },
    bio() {
      return 'Backend Engineer'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The server is up!')
})
