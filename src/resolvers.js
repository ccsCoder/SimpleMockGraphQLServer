const channels = [{
  id: 1,
  name: 'Sony TV',
}, {
  id: 2,
  name: 'Zee TV',
}, {
  id: 3,
  name: 'Republic News',
}, {
  id: 4,
  name: 'Bhakti Channel',
}, {
  id: 5,
  name: 'Sanskar TV',
}, {
  id: 6,
  name: 'Rambharose TV',
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
      return newChannel;
    },
  },
};
