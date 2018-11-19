// @flow

import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import Module from './Module';

export default new GraphQLObjectType({
  name: 'Discipline',
  fields: () => ({
    ref: { type: GraphQLString },
    name: { type: GraphQLString },
    modules: { type: new GraphQLList(Module) },
  }),
});
