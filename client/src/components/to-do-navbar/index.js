import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class ToDoNavbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOpen: false };
	}
	toggle = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};
	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">To Do App</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto">
								<NavItem>
									<NavLink>Home</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default ToDoNavbar;
