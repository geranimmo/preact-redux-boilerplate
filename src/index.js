import 'promise-polyfill';
import 'isomorphic-fetch';
import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './components/reducers';
import createHistory from 'history/createBrowserHistory';
import './style';

let root;

function init() {
	const App = require('./components/app').default;
	const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
	root = render(
		<Provider store={store}>
			<App />
		</Provider>,
		document.body, root
	);
}

// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('./components/app', () => requestAnimationFrame(init) );
}

init();