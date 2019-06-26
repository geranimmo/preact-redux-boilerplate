import { h, Component } from 'preact';
import { connect } from 'preact-redux';
import { testRedux } from './actions/testActions';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isConnected: props.reduxStatus
		}
	}

	componentDidMount() {
		this.props.testRedux()
	}

	shouldComponentUpdate(nextProps) {
		this.setState({isConnected: nextProps.reduxStatus})
	}
	

	render() {
		return (
			<div style={{paddingTop: "50px", minHeight: "200px"}}>
				<div class="alert alert-success" role="alert">
					<h1>Welcome to PreactJS with REDUX Project Starter</h1>
					<p>REDUX IS <b>{this.state.isConnected}</b></p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state;
};

export default connect(mapStateToProps, { testRedux })(Home);