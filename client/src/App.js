import React from 'react';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ToDoNavbar from './components/to-do-navbar';
import ToDoList from './components/to-do-list';
import ToDoModalItem from './components/to-do-modal-item';

function App() {
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

export default App;
