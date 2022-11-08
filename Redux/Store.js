import {configureStore} from '@reduxjs/toolkit';
import {forgotPasswordReducer, updateProfileReducer, userReducer} from './Reducers/UserReducer';

const Store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotPasswordReducer,
    updateProfile: updateProfileReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});
export default Store;