import { apolloInstance, server } from './server'
const { graphqlPath } = apolloInstance

server.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${graphqlPath}`)
})
