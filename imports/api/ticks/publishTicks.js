import { pubsub } from '/imports/api/apollo/server/pubsub';

let ticks = 0;

Meteor.setInterval(
    function () {
        pubsub.publish('ticks', ++ticks)
    },
    100
);
