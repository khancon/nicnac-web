import { createStore } from 'redux';
import rootReducer from '../reducers'; // You need to create reducers

const store = createStore(rootReducer);
export default store;
