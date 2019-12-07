import React from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import uuid from 'uuid';

class ToDoListItem extends React.Component {
	render() {
		const { item, deleteToDo } = this.props;
		console.log(this.props);
		return (
			<Col sm="6" className="my-2">
				<ListGroupItem>
					<p>{item.name} </p>
					<Button onClick={() => deleteToDo(item.id)} color="danger">
						Delete
					</Button>
				</ListGroupItem>
			</Col>
		);
	}
}

export default ToDoListItem;
