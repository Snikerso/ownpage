import { createStore } from '@reduxjs/toolkit';
import blogReducer from 'redux-service/reducers/blogReducer';

const store = createStore(blogReducer);

export default store;
