import React, { useState } from 'react';
import { useStaticKit, ValidationError } from '@statickit/react';
import { sendContactEmail } from '@statickit/functions';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-162040815-1', { standardImplementation: true });
ReactGA.pageview(window.location.pathname + window.location.search);

const Contact = props => {
	const client = useStaticKit();

	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [errors, setErrors] = useState([]);

	const handleSubmit = async e => {
		e.preventDefault();
		setErrors([]);
		setIsSubmitting(true);

		let resp = await sendContactEmail(client, {
			subject: `${email} submitted the contact form`,
			replyTo: email,
			fields: { message }
		});

		switch (resp.status) {
			case 'ok':
				setIsSubmitted(true);
				break;
			case 'argumentError':
				setErrors(resp.errors);
				setIsSubmitting(false);
				break;
			default:
				setIsSubmitting(false);
				break;
		}
	};

	if (isSubmitted) {
		return (
			<p className='success-message'>
				Thank you for reaching out. I will be in touch shortly!
			</p>
		);
	}

	return (
		<div className='form-container'>
			<h2 className='form-title'>Contact Me</h2>
			<form onSubmit={handleSubmit} className='form'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					onChange={e => setEmail(e.target.value)}
					value={email}
					className='email'
					required
				/>
				<ValidationError prefix='Email' field='replyTo' errors={errors} />
				<label htmlFor='message'>Message</label>
				<textarea
					id='message'
					name='message'
					onChange={e => setMessage(e.target.value)}
					value={message}
					className='message'
					required
				/>
				<button type='submit' disabled={isSubmitting} className='submit-button'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Contact;
