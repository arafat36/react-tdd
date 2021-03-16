import { Validator, validate } from 'jsonschema';

const postSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  id: '/post',
  type: 'object',
  properties: {
    id: { type: 'string' },
    createdAt: { type: 'date-time' },
    name: { type: 'string', minLengh: 2 },
    avatar: { type: 'uri' },
    content: { type: 'string' },
  },
  required: ['id', 'createdAt', 'name', 'avatar', 'content'],
};

const postsSchema = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  type: 'array',
  items: { $ref: '/post' },
  uniqueItems: true,
};

export const validatePost = (post, options) =>
  validate(post, postSchema, options);

export const validatePosts = (() => {
  const v = new Validator();
  v.addSchema(postSchema, '/post');

  return (posts, options) => v.validate(posts, postsSchema, options);
})();

/*
Handle other languages...
var localized = result.errors.map(function(err){
  return localeService.translate(err.name);
});

*/
