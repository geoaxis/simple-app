// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Quote } = initSchema(schema);

export {
  Quote
};