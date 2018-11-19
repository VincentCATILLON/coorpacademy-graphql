// @flow

import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import Choice from './Choice';

export default new GraphQLObjectType({
  name: 'Question',
  fields: () => ({
    type: { type: GraphQLString },
    header: { type: GraphQLString },
    explanation: { type: GraphQLString },
    choices: {
      type: new GraphQLList(Choice),
      resolve: ({ content: { choices = [] } }, {}, context) => choices,
    },
  }),
});
