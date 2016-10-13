import { makeExecutableSchema } from "graphql-tools";

export const typeDefs = [`
type Query {
  ticks: Int
}

type Subscription {
  ticks: Int
}

schema {
  query: Query
  subscription: Subscription
}
`];

export const resolvers = {
    Query: {
    },

    Subscription: {
        ticks(root, args, context) {
            return root;
        },
    },
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export { schema };
