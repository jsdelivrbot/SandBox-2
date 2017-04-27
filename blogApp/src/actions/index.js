import axios from 'axios';

export const FETCH_POSTS = 'fetchPosts';
export const CREATE_POST = 'createPost';
export const FETCH_POST = 'fetchPost';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=THISISAKEY777';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
};

export const createPost = (values, callBack) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callBack());

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
