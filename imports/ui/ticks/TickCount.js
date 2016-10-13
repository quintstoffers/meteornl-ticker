import { client } from "/imports/api/apollo/client/apolloClient";
import gql from "graphql-tag";
import { Template } from "meteor/templating";
import { ReactiveVar } from "meteor/reactive-var";
import './TickCount.html';

const { TickCount } = Template;

const TICKS_SUBSCRIPTION = gql`
    subscription ticks {
        ticks
    }
`;

TickCount.onCreated(function onTickCountCreated() {
    const template = this;

    template.ticks = new ReactiveVar(0);

    // Subscribe to ticks
    template.ticksObservable = client
        .subscribe({ query: TICKS_SUBSCRIPTION })
        .subscribe({
            next(data) {
                template.ticks.set(data.ticks)
            }
        });
});

TickCount.onDestroyed(function onTickCountDestroyed() {
    const template = this;

    template.ticksObservable.unsubscribe();
});

TickCount.helpers({
    ticks() {
        const template = Template.instance();

        return template.ticks.get()
    },
});


export { TickCount };
