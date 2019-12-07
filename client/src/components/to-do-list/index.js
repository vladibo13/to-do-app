import React from 'react';
import { Container, ListGroup, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import uuid from 'uuid';
import ToDoListItem from '../to-do-list-item';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{ id: uuid(), name: 'first' },
				{ id: uuid(), name: 'second' },
				{ id: uuid(), name: 'third' },
				{ id: uuid(), name: 'fourth' },
				{ id: uuid(), name: 'fifth' }
			],
			todo: ''
		};
	}

	addToDo = () => {
		const newItemsList = [ ...this.state.items, { id: uuid(), name: this.state.todo } ];
		this.setState({ items: newItemsList, todo: '' });
	};

	deleteToDo = (id) => {
		const filtredArray = this.state.items.filter((todo) => todo.id !== id);
		this.setState({ items: filtredArray });
	};

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { items } = this.state;
		return (
			<div>
				<Container>
					<Form className="mb-5" inline>
						<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
							<Input
								value={this.state.todo}
								onChange={this.handleInput}
								className="w-100"
								type="text"
								name="todo"
								id="todo"
								placeholder="Add To Do"
							/>
						</FormGroup>
						<Button onClick={this.addToDo} type="button">
							Submit
						</Button>
					</Form>
					<ListGroup>
						<Row>
							{items.map((item) => (
								<ToDoListItem deleteToDo={this.deleteToDo} key={item.id} item={item} />
							))}
						</Row>
					</ListGroup>
				</Container>
			</div>
		);
	}
}

export default ToDoList;
