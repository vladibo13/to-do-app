import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/itemsAction';
import {
	Container,
	ListGroup,
	Row,
	Form,
	FormGroup,
	Label,
	Input,
	InputGroup,
	InputGroupAddon,
	Button
} from 'reactstrap';
import uuid from 'uuid';
import ToDoListItem from '../to-do-list-item';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		};
	}

	componentDidMount() {
		console.log(this.props);
	}

	addToDo = () => {
		// const newItemsList = [ ...this.state.items, { id: uuid(), name: this.state.todo } ];
		// this.setState({ items: newItemsList, todo: '' });
	};

	deleteToDo = (id) => {
		// const filtredArray = this.state.items.filter((todo) => todo.id !== id);
		// this.setState({ items: filtredArray });
	};

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { items } = this.props.item;
		return (
			<div>
				<Container>
					<InputGroup className="mb-3">
						<Input
							value={this.state.todo}
							onChange={this.handleInput}
							className="w-100"
							type="text"
							name="todo"
							id="todo"
							placeholder="Add To Do"
						/>
						<InputGroupAddon addonType="append">
							<Button onClick={this.addToDo} type="button" color="success">
								Add To Do
							</Button>
						</InputGroupAddon>
					</InputGroup>
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

const mapDispatchToProps = (dispatch) => {
	return {
		getItems: () => dispatch(getItems)
	};
};

const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
