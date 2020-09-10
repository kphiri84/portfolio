import React from 'react';
import './portfolio.css';

const Portfolio = () => {
	return (
		<div>
			<h1 className="portfolio">PORTFOLIO</h1>
			<hr />
			<div className="portFirstRow">
				<img className="images" src="https://zupimages.net/up/20/21/k9fl.png" alt="projet1"/>
				<img className="images" src="https://zupimages.net/up/20/22/naix.png" alt="projet1"/>
			</div>
			<div className="portSecondRow">
				<img className="images" src="https://zupimages.net/up/20/22/x1jy.png" alt="projet1"/>
				<img
					className="images"
					src="https://www.union-dentaire.com/wp-content/uploads/2018/04/projet-en-cours.jpg"
					alt="projet1"
				/>
			</div>
		</div>
	);
};

export default Portfolio;
