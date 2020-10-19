import { configureStore } from '@reduxjs/toolkit';
import root from './reducers';

export default configureStore({
  reducer: {
    root
  },
});
