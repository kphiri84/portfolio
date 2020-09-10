import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap';
import './nav.css';

const NavMenu = () => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Navbar className="navbar" color="white" light expand="md">
			<NavbarBrand href="/">reactstrap</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<NavLink href="#test">Présentation</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="./Competences">Compétences</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="./Portfolio">Portfolio</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="./Contact">Contact</NavLink>
					</NavItem>
				</Nav>
				<NavbarText>Simple Text</NavbarText>
			</Collapse>
		</Navbar>
	);
};

export default NavMenu;
