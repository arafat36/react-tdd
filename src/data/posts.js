import axios from './axiosInstance';

export function fetchPosts(config) {
  return axios.get('/posts', config).then((res) => res.data);
}

// TODO: test fetchPost
// export function fetchPost(postId, config) {
//   return axios.get(`posts/${postId}`, config);
// }
