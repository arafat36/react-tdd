import { fetchPost, fetchPosts } from '../posts';
import { validatePost, validatePosts } from '../schema';

describe('fetchPosts', () => {
  it('returns a lists of posts', async () => {
    // console.log(process.env.REACT_APP_MOCKAPI_ID);
    let data;
    try {
      data = await fetchPosts();
      validatePosts(data, { throwError: true });
    } catch (error) {
      console.log(error.toString());
    }

    // console.log(data);
    // console.log(JSON.stringify(validatePosts(data), null, 2));
    // console.log(JSON.stringify(validatePosts(data).errors[0].message, null, 2));
    expect(validatePosts(data).valid).toEqual(true);
  });
});

describe('fetchPost', () => {
  it('fetches a single valid post from the api', () => {
    fetchPost(1).then((p) => expect(validatePost(p).valid).toEqual(true));
  });
});
