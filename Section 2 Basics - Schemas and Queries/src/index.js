import { GraphQLServer } from 'graphql-yoga';

// Scalar Types - String, Boolean, Int, Float, ID
// the scalar types always have a single value

// Type definitions
const typeDefs = `
  type Query {
    title: String!
    price: Float!
    releaseYear: Int
    rating: Float
    inStock: Boolean!
  }
`

// Resolvers
const resolvers = {
  Query: {
    title() {
      return 'The War of Art'
    },
    price() {
      return 12.99
    },
    releaseYear() {
      return null
    },
    rating() {
      return 5
    },
    inStock() {
      return true
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
