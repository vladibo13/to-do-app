import React from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../redux/actions/itemsAction';
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
		this.props.getItems();
	}

	handleInput = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	render() {
		const { items } = this.props.item;
		return (
			<div>
				<ListGroup>
					<Row>{items.map((item) => <ToDoListItem key={item._id} item={item} />)}</Row>
				</ListGroup>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getItems: () => dispatch(getItems())
	};
};

const mapStateToProps = (state) => ({ item: state.item });

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
