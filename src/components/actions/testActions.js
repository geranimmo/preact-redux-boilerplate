import { TEST_REDUX } from './types';

export const testRedux = () => {
	return (dispatch) => {
		dispatch({ type: TEST_REDUX });
	};
};