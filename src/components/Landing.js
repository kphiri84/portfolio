import React from 'react';
import NavMenu from './NavMenu';
import AnimBorder from './AnimBorder';
import About from './About';
import Portfolio from './Portfolio';
import Competences from './Competences';
import Contact from './Contact';

const Landing = (props) => {
	return (
		<div id="home">
			<NavMenu />
            <AnimBorder />
            <About />
            <Competences />
            <Portfolio />
            <Contact />
		</div>
	);
};

export default Landing;
