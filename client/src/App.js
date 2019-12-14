import React from 'react';
import { Container } from 'reactstrap';
import { loadUser } from './redux/actions/authAction';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import './App.css';
import ToDoNavbar from './components/to-do-navbar';
import ToDoList from './components/to-do-list';
import ToDoModalItem from './components/to-do-modal-item';

class App extends React.Component {
	componentDidMount() {
		this.props.loadUser();
	}
	render() {
		return (
			<div>
				<ToDoNavbar />
				<Container>
					<ToDoModalItem />
					<ToDoList />
				</Container>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loadUser: () => dispatch(loadUser())
	};
};

export default connect(null, mapDispatchToProps)(App);
