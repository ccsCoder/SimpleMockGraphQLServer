import { PubSub } from 'apollo-server-express';
const CHANNEL_ADDED = 'channelAdded';

const pubsub = new PubSub();

const channels = [{
  id: 1,
  name: 'Republic TV',
}, {
  id: 2,
  name: 'ABP News',
}, {
  id: 3,
  name: 'Sudarshan News',
}, {
  id: 4,
  name: 'India TV',
}, {
  id: 5,
  name: 'Aaj Tak - Sabse Tez',
}, {
  id: 6,
  name: 'News 18',
}];

let nextId = 7;

export const resolvers = {
  Query: {
    channels: () => {
      return channels;
    },
    channel: (root, { id }) => {
      return channels.find(channel => channel.id == id);
    },
  },
  Mutation: {
    addChannel: (root, args) => {
      const newChannel = { id: nextId++, name: args.name };
      channels.push(newChannel);
      pubsub.publish(CHANNEL_ADDED, {
          [CHANNEL_ADDED]: args.name
      });
      return newChannel;
    },
    },
  Subscription: {
    channelAdded: {
        subscribe: () => pubsub.asyncIterator(CHANNEL_ADDED),
    }
  }
};
