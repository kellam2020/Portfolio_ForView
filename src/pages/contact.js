import '../App.css';
import Navbar from '../components/Navbar';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage() {
	const [state, handleSubmit] = useForm('mknllblk');
	if (state.succeeded) {
		return (
			<p>Thanks for getting in touch with me. Will get back with you soon!<br></br>Please refresh the browser</p>
		);
	}

	return (
		<>
			<Navbar />
			<center>
				<div className='container1'>
					<div style={{ textAlign: 'center' }}>
						<h1 className='text-5xl'>Contact Me</h1>
						<br></br>
					</div>
					<div className='row'>
						<div className='column'>
							<form
								id='form'
								action='https://formspree.io/f/mknllblk'
								method='POST'
								onSubmit={handleSubmit}
							>
								<label htmlFor='fname'>First Name</label>
								<input
									type='text'
									id='fname'
									name='firstname'
									placeholder='Your name..'
								/>
								<label htmlFor='lname'>Last Name</label>
								<input
									type='text'
									id='lname'
									name='lastname'
									placeholder='Your last name..'
								/>
								<label htmlFor='email'> Email address</label>
								<input
									id='email'
									type='email'
									name='email'
									placeholder='Your email here'
									required
								/>
								<ValidationError
									prefix='Email'
									field='email'
									errors={state.errors}
								/>

								<label htmlFor='city'>City</label>
								<select id='city' name='city'>
									<option value='columbus'>Columbus</option>
									<option value='newalbany'>New Albany</option>
									<option value='westerville'>Westerville</option>
								</select>
								<label for='subject'>Subject</label>
								<textarea
									id='subject'
									name='subject'
									placeholder='Write something..'
									style={{ height: '50px' }}
								></textarea>
								<label htmlFor='message'>Message</label>
								<textarea
									id='message'
									name='message'
									type='text'
									placeholder='Write something..'
									style={{ height: '170px' }}
								></textarea>
								<ValidationError
									prefix='Message'
									field='message'
									errors={state.errors}
								/>
								<button
									type='submit'
									disabled={state.submitting}
									className='grey'
								>
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</center>
		</>
	);
}
