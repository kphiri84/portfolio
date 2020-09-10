import React from 'react';
import './competences.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.svg';
import node from '../assets/node.png';
import mysql from '../assets/mysql.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import illustrator from '../assets/illustrator.png';
import scrum from '../assets/scrum.svg';
import wordpress from '../assets/wordpress.png';
import bootstrap from '../assets/boot.png';

const Competences = () => {
	return (
		<div className="comp">
			<h1>COMPETENCES</h1>
			<hr className="compHr" />
			<div className="firstRow">
				<div className="cards">
					<img className="logos" src={html} alt="logo html" />
				</div>
				<div className="cards">
					<img className="logos" src={css} alt="logo css" />
				</div>
				<div className="cards">
					<img className="logos" src={bootstrap} alt="logo bootstrap" />
				</div>
				<div className="cards">
					<img className="logos" src={js} alt="logo js" />
				</div>
			</div>
			<div className="secondRow">
				<div className="cards">
					<img className="logos" src={react} alt="logo react" />
				</div>
				<div className="cards">
					<img className="logos" src={node} alt="logo node" />
				</div>
				<div className="cards">
					<img className="logos" src={mysql} alt="logo mysql" />
				</div>
				<div className="cards">
					<img className="logos" src={wordpress} alt="logo wordpress" />
				</div>
			</div>
			<div className="thirdRow">
				<div className="cards">
					<img className="logos" src={git} alt="logo git" />
				</div>
				<div className="cards">
					<img className="logos" src={github} alt="logo github" />
				</div>
				<div className="cards">
					<img className="logos" src={illustrator} alt="logo illustrator" />
				</div>
				<div className="cards">
					<img className="logos" src={scrum} alt="logo scrum" />
				</div>
			</div>
		</div>
	);
};

export default Competences;
