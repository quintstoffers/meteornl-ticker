import { SubscriptionManager } from "graphql-subscriptions";
import { pubsub } from "/imports/api/apollo/server/pubsub";
import { schema } from "/imports/api/graphql/schema";

const subscriptionManager = new SubscriptionManager({
    schema,
    pubsub,
    setupFunctions: {
        ticks: (options, args) => ({
            'ticks': {},
        }),
    },
});

export { subscriptionManager };
