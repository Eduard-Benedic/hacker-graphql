const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Query {
        info: String!
    }
`

const resolvers = {
    Query: {
        info: () => `My first resolver GraphQL implementation`
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server
    .listen()
    .then(({ url }) => {
        console.log(`Server is running ${url}`)
    })
