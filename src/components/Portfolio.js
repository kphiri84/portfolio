import React from 'react';
import './portfolio.css';

const Portfolio = () => {
	return ( 
		<div id="portfolio">
			<h1 className="portfolio">PORTFOLIO</h1>
			<hr />
			<div className="container">
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/21/k9fl.png" alt="projet1"/>
					</div>
					<div className="contentBx">
						<h2>SITE TARANTINO</h2>
						<p>Développement d'un site web sur le thème de Quentin Tarantino</p>
						<p>HTML/CSS/JavaScript</p>
						<a href="https://site-tarantino.netlify.app/ ">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/22/naix.png" alt="projet1"/>
					</div>
					<div className="contentBx">
						<h2>GEEK TROTTER</h2>
						<p>Développement d'une application web, basé sur l'API Windy, sur le thème de voyager depuis son canapé</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://geek-trotter.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/22/x1jy.png" alt="projet1"/>
					</div>
					<div className="contentBx">
						<h2>MEMORY HORROR GAME</h2>
						<p>Développement d'une application web, basé sur le thème des films d'horreurs</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://memory-horror-game.netlify.app/">Lien</a>
					</div>
				</div>
				<div className="box">
					<div className="imgBx">
						<img className="images" src="https://zupimages.net/up/20/37/klq2.png" alt="projet1" />
					</div>
					<div className="contentBx">
						<h2>Marche Rose Combourg</h2>
						<p>Création d'un site à l'occasion de la marche rose à Combourg</p>
						<p>JavaScript/ReactJS</p>
						<a href="https://marche-rose-combourg2020.netlify.app/">Lien</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
