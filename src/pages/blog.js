import '../App.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function BlogsPage() {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [thoughts, setThoughts] = useState('');
	const [image, setImage] = useState(null);
	const navigate = useNavigate();

	//The handleImageUpload function will be called when the user selects an image to upload.
	//The function will set the image state to the URL of the image.
	// the if statement checks if the user has selected an image
	// if the user has selected an image, the URL of the image is set to the image state
	// the URL.createObjectURL() method creates a DOMString containing a URL representing the object given in the parameter
	//The event.target.files property returns a list of the files selected by the user
	const handleImageUpload = (event) => {
		if (event.target.files && event.target.files[0]) {
			setImage(URL.createObjectURL(event.target.files[0]));
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		navigate('/postedBlogs', {
			// Pass the submitted data as state to the PostedBlogs component
			state: { firstName, lastName, thoughts, image },
		});
	};

	console.log({ firstName, lastName, thoughts, image });
	return (
		<>
			<Navbar />
			<center>
				<div className='container1'>
					<div style={{ textAlign: 'center' }}>
						<h1 className='text-5xl'>Share</h1>
						<br></br>
					</div>
					<div className='row'>
						<div className='column'>
							<form onSubmit={handleSubmit}>
								<label htmlFor='fname'>First Name</label>
								<input
									type='text'
									id='fname'
									name='firstname'
									placeholder='Your name..'
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
								<label htmlFor='lname'>Last Name</label>
								<input
									type='text'
									id='lname'
									name='lastname'
									placeholder='Your last name..'
									value={lastName}
									onChange={(e) => setLastName(e.target.value)}
								/>

								<label htmlFor='subject'>What are your thoughts?</label>
								<textarea
									id='subject'
									name='subject'
									placeholder='Write something..'
									style={{ height: '170px' }}
									value={thoughts}
									onChange={(e) => setThoughts(e.target.value)}
								></textarea>
								<div className='flex items-center justify-center'>
									<label htmlFor='image'> </label>

									<input
										type='file'
										id='image'
										name='image'
										onChange={handleImageUpload}
										className='text-center'
									/>
								</div>

								<input className='grey mt-4' type='submit' value='Submit' />
							</form>
						</div>
					</div>
				</div>
			</center>
		</>
	);
}
