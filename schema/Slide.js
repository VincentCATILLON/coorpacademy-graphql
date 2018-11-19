// @flow

import { GraphQLString, GraphQLList, GraphQLObjectType } from 'graphql';

import Lesson from './Lesson';
import Question from './Question';

export default new GraphQLObjectType({
  name: 'Slide',
  fields: () => ({
    id: { type: GraphQLString },
    tips: { type: GraphQLString },
    lessons: { type: new GraphQLList(Lesson) },
    question: { type: Question },
  }),
});
