const { ApolloServer } = require('apollo-server')

const typeDefs = `
    type Query {
        info: String!
        feed: [Link!]!
    }
    type Link {
        id: ID!
        description: String!
        url: String!
    }
`

let links = [
    {
        id: 'link-0',
        description: 'Hello',
        url: 'https://google.com'
    }
]

const resolvers = {
    Query: {
        info: () => `My first resolver GraphQL implementation`,
        feed: () => links
    },
    Link: {
        id: (parent) => {
            console.log(parent)
            return parent.id
        },
        description: (parent) => parent.description,
        url: (parent) => parent.url
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
