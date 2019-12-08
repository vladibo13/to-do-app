import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../redux/actions/itemsAction';
import uuid from 'uuid';

class ToDoListItem extends React.Component {
	render() {
		console.log(this.props);
		const { item, deleteItem } = this.props;
		console.log(this.props);
		return (
			<Col sm="6" className="my-2">
				<ListGroupItem>
					<p>{item.name} </p>
					<Button onClick={() => deleteItem(item.id)} color="danger">
						Delete
					</Button>
				</ListGroupItem>
			</Col>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		deleteItem: (id) => dispatch(deleteItem(id))
	};
};

// const mapStateToProps = (state) => ({ item: state.item });

export default connect(null, mapDispatchToProps)(ToDoListItem);
