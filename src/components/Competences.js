import React from 'react';
import './ab.css';
import { Col, Row } from 'reactstrap';
import kenny from '../assets/ken2.png';
import pattern from '../assets/path27.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import illustrator from '../assets/illustrator.png';
import scrum from '../assets/scrum.png';
import wordpress from '../assets/wordpress.png';
import bootstrap from '../assets/boot.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	AOS.init();
	return (
		<div className="ab" id="competences">
			<div
				data-aos="fade-up"
				data-aos-delay="50"
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos-mirror="true"
				data-aos-once="false"
				data-aos-anchor-placement="top-center"
			>
				<div className="title">
					<h1 className="competences">COMPETENCES</h1>
				</div>
			</div>
			<Row className="columns">
				<Col
					data-aos="zoom-in"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
					className="image2"
					md="5"
				>
					<div>
						<img className="pattern2" src={pattern} alt="" />
						<img className="kennys2" src={kenny} alt="" />
					</div>
				</Col>
				<Col className="allLogos" md="7">
					<div className="firstRow">
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={html} alt="logo html" />
							<p className="compName">HTML</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={css} alt="logo css" />
							<p className="compName">CSS</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={bootstrap} alt="logo bootstrap" />
							<p className="compName">BOOTSTRAP</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={js} alt="logo js" />
							<p className="compName">JAVASCRIPT</p>
						</div>
					</div>
					<div className="secondRow">
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={react} alt="logo react" />
							<p className="compName">REACTJS</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp logoNode" src={node} alt="logo node" />
							<p className="compName">NODEJS</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp logoMysql" src={mysql} alt="logo mysql" />
							<p className="compName">MYSQL</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={wordpress} alt="logo wordpress" />
							<p className="compName">WORDPRESS</p>
						</div>
					</div>
					<div className="thirdRow">
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={git} alt="logo git" />
							<p className="compName">GIT</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={github} alt="logo github" />
							<p className="compName">GITHUB</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp" src={illustrator} alt="logo illustrator" />
							<p className="compName">ILLUSTRATOR</p>
						</div>
						<div
							className="cardsLogo"
							data-aos="flip-left"
							data-aos-delay="50"
							data-aos-duration="1000"
							data-aos-easing="ease-in-out"
							data-aos-mirror="true"
							data-aos-once="false"
						>
							<img className="logosComp logoScrum" src={scrum} alt="logo scrum" />
							<p className="compName">METHODE AGILE</p>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default About;
