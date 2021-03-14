import { fetchPosts } from '../posts';
import { validatePosts } from '../schema';

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
