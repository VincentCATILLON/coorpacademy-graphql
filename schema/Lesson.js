// @flow

import { GraphQLString, GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'Lesson',
  fields: () => ({
    ref: { type: GraphQLString },
    type: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});
