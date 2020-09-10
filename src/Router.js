import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contact from './components/Contact';
import Competences from './components/Competences';
import Portfolio from './components/Carousel';
import About from './components/About'
import Landing from './components/Landing';

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Landing} />
			<Route path="/about" component={About} />
			<Route path="/competences" component={Competences} />
			<Route path="/portfolio" component={Portfolio} />
			<Route path="/contact" component={Contact} />
		</Switch>
	);
};
export default Router;
