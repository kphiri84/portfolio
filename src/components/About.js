import React from 'react';
import './about.css';
import { Col, Row } from 'reactstrap';
import kenny from '../assets/ken.png';
import pattern from '../assets/path25.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
	AOS.init();
	return (
		<div className="about" id="about">
			<Row className="columns">
				<Col className="prez" md="9">
					<div
						data-aos="fade-up"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="false"
					>
						<h1 className="presentation">PRESENTATION</h1>
					</div>
					<div
						data-aos="fade-up"
						data-aos-delay="50"
						data-aos-duration="1000"
						data-aos-easing="ease-in-out"
						data-aos-mirror="true"
						data-aos-once="false"
					>
						<h2 className="name">KENNY PHIRI - Développeur</h2>
					</div>
					<p className="me">
						Développeur web fullstack autodidacte de 28 ans basé sur Avignon, j'ai suivi une formation de
						développeur web à la Wild Code School. Le développement web est une de mes passions que je
						cultive au quotidien. Je suis passionné par l'UX-UI design, les créations web, la manipulation
						de bases de données et toutes les dernières technologies. J'aime expérimenter, créer et relever
						de nouveaux défis. <br /> Si vous êtes intéressé par mon profil ou que vous voulez en savoir plus sur
						moi, n'hésitez pas à me contacter.
					</p>
				</Col>
				<Col
					data-aos="zoom-in"
					data-aos-delay="50"
					data-aos-duration="1000"
					data-aos-easing="ease-in-out"
					data-aos-mirror="true"
					data-aos-once="false"
					data-aos-anchor-placement="top-center"
					className="image"
					md="3"
				>
					<div>
						<img className="pattern" src={pattern} alt="" />
						<img className="kennys" src={kenny} alt="" />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default About;
