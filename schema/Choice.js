// @flow

import { GraphQLString, GraphQLObjectType } from 'graphql';

export default new GraphQLObjectType({
  name: 'Choice',
  fields: () => ({
    id: { type: GraphQLString },
    value: { type: GraphQLString },
    label: { type: GraphQLString },
  }),
});
