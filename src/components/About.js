import React from 'react';
import './about.css';
import Gsap from './Gsap';
import { Col } from 'reactstrap'

const About = () => {
	return (
		<div className="about" id="about">
			<h1 className="presentation">PRESENTATION</h1>
			<hr />
			<div className="columns">
				
				<Col md='12'>
					<p className="name">Hello ! Moi c'est Kenny</p>
					<p className="me">
						Jeune développeur autodidacte et passionné depuis de nombreuses années, je prépare actuellement une
						alternance en tant que Développeur Web FullStack. <br />
						Je développe en JavaScript, ce qui me permet de développer des applications web et mobiles en
						responsive
					</p>
					<Gsap />
				</Col>
			</div>
		</div>
	);
};

export default About;
