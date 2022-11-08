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


"@stripe/stripe-js": "^1.32.0",
"@stripe/stripe-react-native": "^0.15.0",
"axios": "^0.26.1",
"lottie-react-native": "^5.0.1",
"native-base": "2.15.2",
"npm": "^8.8.0",


"react": "17.0.2",
"react-dom": "^18.0.0",
"react-native": "^0.68.0",
"react-native-gesture-handler": "^2.4.1",
"react-native-image-crop-picker": "^0.37.3",
"react-native-reanimated": "^2.8.0",
"react-native-rename": "^2.9.0",
"react-native-safe-area-context": "^4.2.4",
"react-native-screens": "^3.13.1",
"react-native-svg": "^12.3.0",
"react-native-swiper": "^1.6.0",
"react-native-version": "^4.0.0",
"react-navigation": "^4.4.4",
"react-redux": "^8.0.0",
"redux": "^4.2.0",
"redux-devtools-extension": "^2.13.9",
"remote-redux-devtools": "^0.5.16",
"stripe": "^9.13.0"

"@babel/core": "^7.12.9",
"@babel/runtime": "^7.12.5",
"@react-native-community/eslint-config": "^2.0.0",
"babel-jest": "^26.6.3",
"eslint": "^7.32.0",
"jest": "^26.6.3",
"metro-react-native-babel-preset": "^0.67.0",
"react-test-renderer": "17.0.2"