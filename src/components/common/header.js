import { h, Component } from 'preact';
import { connect } from 'preact-redux';

class Header extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
    	return (
			<nav class="navbar navbar-fixed-top">
				<div class="navbar-inner">
					<div class="container">...</div>
				</div>
			</nav>
    	);
	}
}


const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, {})(Header);