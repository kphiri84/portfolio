import React from 'react';
import './contact.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Contact = (props) => {
	return (
		<Form className="contact" id="contact">
			<h1 className="contactTitle">CONTACT</h1>
			<hr className="contactHr"/>
			<p className="lead">Pour toute demande ou suggestions n'hésitez pas à me contacter !</p>
			<FormGroup>
				<Label for="examplePassword">Nom/Prénom</Label>
				<Input type="text" name="text" id="exampleName" />
			</FormGroup>
			<FormGroup>
				<Label for="exampleEmail">Email</Label>
				<Input type="email" name="email" id="exampleEmail" />
			</FormGroup>
			<FormGroup>
				<Label for="examplePassword">Téléphone</Label>
				<Input type="text" name="text" id="exampleNumber" />
			</FormGroup>
			<FormGroup>
				<Label for="exampleText">Message</Label>
				<Input type="textarea" name="text" id="exampleText" />
			</FormGroup>
			<Button>Envoyer</Button>
		</Form>
	);
};

export default Contact;
