import axios from './axiosInstance';

export function fetchPosts(config) {
  return axios.get('/posts', config).then((res) => res.data);
}

export function fetchPost(postId, config) {
  return axios.get(`posts/${postId}`, config);
}
