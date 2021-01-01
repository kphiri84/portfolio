import React from 'react';
import './anim.css';
import './competences.css';
import ScrollButton from './ScrollButton';
import { Icon } from 'semantic-ui-react' 

const AnimBorder = () => {
	return (
		<div class="header">
			<div class="inner-header flex">
				<h1 className="job">Développeur web et mobile JavaScript FullStack</h1>
				<div className="socialmedia">
					<a className="medialogo" href="https://www.linkedin.com/in/kenny-phiri/"><Icon name='linkedin' size="big"/></a>
					<a className="medialogo" href="https://github.com/kphiri84"><Icon name='github' size="big"/></a>
				</div>
			</div>
			<div className="buttonScroll">
				<ScrollButton />
			</div>
			<div>
				<svg
					class="waves"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					viewBox="0 24 150 28"
					preserveAspectRatio="none"
					shape-rendering="auto"
				>
					<defs>
						<path
							id="gentle-wave"
							d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
						/>
					</defs>
					<g class="parallax">
						<use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(245,245,220,0.7)" />
						<use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(245,245,220,0.5)" />
						<use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(245,245,220,0.3)" />
						<use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(245,245,220)" />
					</g>
				</svg>
			</div>
		</div>
	);
};

export default AnimBorder;
