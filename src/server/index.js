import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import modules from './graphql/modules'

const context = (req, res) => {
  return {
    req,
    res
  }
}

const apolloInstance = new ApolloServer({
  modules,
  context
})

const server = express()
apolloInstance.applyMiddleware({ app: server, path: '/graphql' })

export { apolloInstance, server }

// export const startServer = () => {
//   pqp.listen({ port: 4000 }, () => {
//     console.log(
//       `🚀 Server ready at http://localhost:4000${apolloServer.graphqlPath}`
//     )
//   })
// }
