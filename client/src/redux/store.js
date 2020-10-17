import { configureStore } from '@reduxjs/toolkit';
import app from './reducers';

export default configureStore({
  reducer: {
    app
  },
});
