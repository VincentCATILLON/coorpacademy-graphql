// @flow

import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import Mooc from '../modules/apis/Mooc';

import Chapter from './Chapter';

export default new GraphQLObjectType({
  name: 'Module',
  fields: () => ({
    ref: { type: GraphQLString },
    level: { type: GraphQLString },
    chapters: {
      type: new GraphQLList(Chapter),
      resolve: ({ chapterIds: ids = [] }, {}, context) =>
        ids.map(id => Mooc.chapters(id, {}, context)),
    },
  }),
});
