// @flow

import {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLList,
} from 'graphql';

import Slide from './Slide';

import Mooc from '../modules/apis/Mooc';

export default new GraphQLObjectType({
  name: 'Chapter',
  fields: () => ({
    name: { type: GraphQLString },
    stars: { type: GraphQLInt },
    slides: {
      type: new GraphQLList(Slide),
      resolve: ({ universalRef: id }, {}, context) =>
        Mooc.chapterSlides(id, {}, context).then(slides => slides || []),
    },
  }),
});
