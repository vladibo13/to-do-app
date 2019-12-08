import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, InputGroup, InputGroupAddon } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../../redux/actions/itemsAction';

class ToDoModalItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			name: ''
		};
	}
	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	toggle = () => {
		this.setState({ modal: !this.state.modal });
	};

	addToDo = () => {
		const newItemsList = { name: this.state.name };
		this.props.addItem(newItemsList);
		this.toggle();
		// this.setState({ items: newItemsList, todo: '' });
	};
	render() {
		console.log(this.props);
		const { item, deleteItem } = this.props;
		console.log(this.props);
		return (
			<div>
				<Button className="mb-3" color="success" onClick={this.toggle}>
					Add Item
				</Button>

				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add To Do</ModalHeader>
					<ModalBody>
						<InputGroup className="mb-3">
							<Input
								value={this.state.name}
								onChange={this.handleInput}
								className="w-100"
								type="text"
								name="name"
								id="todo"
								placeholder="Add To Do"
							/>
							<InputGroupAddon addonType="append">
								<Button onClick={this.addToDo} type="button" color="success">
									Add To Do
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (newToDo) => dispatch(addItem(newToDo))
	};
};

// const mapStateToProps = (state) => ({ item: state.item });

export default connect(null, mapDispatchToProps)(ToDoModalItem);
