import { h, Component } from 'preact';
import { Router } from 'preact-router';
import AsyncRoute from 'preact-async-route';
import createHistory from 'history/createBrowserHistory';
import Header from './common/header';

class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */

	render() {
		return (
			<div id="app">
				<Header />
				<Router history={createHistory()} onChange={this.handleRoute}>
					<AsyncRoute
						path="/"
						getComponent={() => import('./home').then(module => module.default)}
						loading={this.loader}
					/>
				</Router>
			</div>
		);
	}
}

export default App;