import { combineReducers } from 'redux';
import testReducer from './testReducers';

export default combineReducers({
	reduxStatus: testReducer
});
