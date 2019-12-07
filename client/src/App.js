import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import ToDoNavbar from './components/to-do-navbar';
import ToDoList from './components/to-do-list';

function App() {
	return (
		<div>
			<ToDoNavbar />
			<ToDoList />
		</div>
	);
}

export default App;
