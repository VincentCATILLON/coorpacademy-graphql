// @flow

import {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
} from 'graphql';

import Discipline from './Discipline';
import Slide from './Slide';
import Mooc from '../modules/apis/Mooc';

const query = new GraphQLObjectType({
  name: 'Schema',
  fields: () => ({
    catalogue: {
      type: new GraphQLList(Discipline),
      description: 'Catalogue content',
      args: {
        limit: {
          name: 'limit',
          type: GraphQLInt,
        },
      },
      resolve: (_, { limit }, context) =>
        Mooc.disciplines(
          {
            limit: limit || 10,
          },
          context,
        ).then(disciplines => disciplines || []),
    },
    slides: {
      type: new GraphQLList(Slide),
      description: 'Slides content',
      args: {
        chapterRef: {
          name: 'chapterRef',
          type: GraphQLString,
        },
      },
      resolve: (_, { chapterRef }, context) =>
        Mooc.chapterSlides(chapterRef, {}, context).then(
          slides => slides || [],
        ),
    },
  }),
});

export default new GraphQLSchema({
  query,
});
