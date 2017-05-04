import axios from 'axios';

export const FETCH_POSTS = 'fetchPosts';
export const FETCH_POST = 'fetchPost';
export const CREATE_POST = 'createPost';
export const DELETE_POST = 'deletePost';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=THISISAKEY777';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
};

export const fetchPost = (id) => {
  const request = axios.post(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
};

export const deletePost = (id, callback) => {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}
