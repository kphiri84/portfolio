import React from 'react';
import './about.css';
import Gsap from './Gsap';
const About = () => {
	return (
		<div className="about" id="test">
			<h1 className="presentation">PRESENTATION</h1>
			<hr />
			<div className="columns">
				<div>
					<Gsap />
				</div>
				<div>
					<p className="name">Hello ! Moi c'est Kenny</p>
					<p className="me">
						Jeune développeur autodidacte et passionné depuis de nombreuses années, je prépare actuellement une
						alternance en tant que Développeur Web FullStack. <br />
						Je developpe en JavaScript, ce qui me permet de développer des applications web et mobiles en
						responsive
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
