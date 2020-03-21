import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    ping: String
  }
`

const resolvers = {
  Query: {
    ping: (_, __, context) => 'pong'
  }
}

export default {
  typeDefs,
  resolvers
}
