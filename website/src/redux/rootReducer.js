import { combineReducers } from 'redux';
import transactionReducer from './transactionReducer';

const rootReducer = combineReducers({
  transaction: transactionReducer,
});

export default rootReducer;
