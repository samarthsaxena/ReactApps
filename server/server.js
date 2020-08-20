const { GraphQLServer, PubSub } = require('graphql-yoga');

const messages = [];


// Schema for graphQL Server (just like sql schema)
const typeDefs = `
    type Message {
        id : ID!
        user : String!
        content : String!
    }

    type Query {
        messages : [Message!]
    }

    type Mutation {
        postMessage(user: String!, content: String!) : ID!
    }

    type Subscription {
        messages : [Message!]
    }
`;

const subscribers = [];
const onMessagesUpdates = (fn) => subscribers.push(fn);


//To get the data you need resolvers
const resolvers = {
    Query: {
        messages: () => messages,

    },

    Mutation: {
        postMessage: (parent, { user, content }) => {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            subscribers.forEach(fn => fn());
            return id;
        }
    },
    Subscription: {
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2, 15);
                onMessagesUpdates(() => pubsub.publish(channel, { messages }));
                //Just being nice here.
                setTimeout(() => pubsub.publish(channel, { messages }), 0);
                return pubsub.asyncIterator(channel);
            }
        }
    }
};

const pubsub = new PubSub();

// Pass the api schema and resolvers to graphql server so it may know the query and how to get the data.
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

// Start the server
server.start(({ port }) => {
    console.log(`server startup on http://localhost:${port}/`);
});