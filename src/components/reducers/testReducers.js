import { TEST_REDUX } from '../actions/types';

const INITIAL_STATE = "NOT CONNECTED";

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TEST_REDUX:
			return "CONNECTED";
		default:
			return state;
	}
};
