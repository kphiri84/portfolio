import React, { useState } from 'react';
import './contact.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import emailjs from 'emailjs-com'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [number, setNumber] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		let templateParams = {
		  from_name: `${name}, ${email}`,
		  to_name: 'kenny.phiri84@gmail.com',
		  number: `${number}`,
		  message: `${message}`,
		}
		emailjs.send(
		  'service_jc798al',
		  'template_xkirupe',
		  templateParams,
		  'user_YOSNbWUH9QyZXCPbUkaGH'
		).then(function(response) {
			console.log('SUCCESS!', response.status, response.text);
		 }, 
		 function(error) {
			console.log('FAILED...', error);
		 })
		resetForm()
		alert('Votre message a bien été envoyé')
	  }
	  const resetForm = () => {
		  setName('')
		  setEmail('')
		  setNumber('')
		  setMessage('')
	  }

	return (
		<Form onSubmit = {handleSubmit} className="contact" id="contact">
			<h1 className="contactTitle">CONTACT</h1>
			<hr className="contactHr"/>
			<p className="lead">Pour toute demande ou suggestions n'hésitez pas à me contacter !</p>
			<FormGroup>
				<Label for="examplePassword">Nom/Prénom</Label>
				<Input 
					type="text" 
					name="text" 
					id="exampleName"
					value={name} 
					onChange= { (e) => setName(e.target.value) }
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleEmail">Email</Label>
				<Input 
					type="email" 
					name="email" 
					id="exampleEmail"
					value={email}
					onChange= { (e) => setEmail(e.target.value) }
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleNumber">Téléphone</Label>
				<Input 
					type="text" 
					name="text" 
					id="exampleNumber"
					value={number} 
					onChange= { (e) => setNumber(e.target.value)}
				/>
			</FormGroup>
			<FormGroup>
				<Label for="exampleMessage">Message</Label>
				<Input 
					type="textarea" 
					name="text" 
					id="exampleText"
					value={message}
					onChange= { (e) => setMessage(e.target.value) }
				 />
			</FormGroup>
			<FormGroup className="buttonGroup">
				<Button>Envoyer</Button>
			</FormGroup>
			
		</Form>
	);
};

export default Contact;
