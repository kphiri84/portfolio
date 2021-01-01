import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import './nav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../assets/logo.png'

const NavMenu = () => {
	const [ isOpen, setIsOpen ] = useState(false);
	const [navbar, setNavbar] = useState(false)
	const toggle = () => setIsOpen(!isOpen);

	const changeBackground = () => {
		window.scrollY >= 80 ?
		setNavbar(true) : setNavbar(false)
	}

	window.addEventListener('scroll', changeBackground)

	return (
		<Navbar className={navbar ? "navbar active" : "navbar"} expand="md">
			<AnchorLink className="navbar-brand" href="#home">
				<img className="logoKenny" src={logo} alt="" />
			</AnchorLink>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav className="mr-auto" navbar>
					<NavItem>
						<AnchorLink className="nav-link active" offset='100' href="#about">Présentation</AnchorLink>
					</NavItem>
					<NavItem>
						<AnchorLink className="nav-link active" offset='100' href="#competences">Compétences</AnchorLink>
					</NavItem>
					<NavItem>
						<AnchorLink className="nav-link active" offset='100' href="#portfolio">Portfolio</AnchorLink>
					</NavItem>
					<NavItem>
						<AnchorLink className="nav-link active" offset='100' href="#contact">Contact</AnchorLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default NavMenu;
