import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { app, auth } from '../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

export default function Signup() {
	const [currentUser, setCurrentUser] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser) {
			navigate('/userPage');
		}
	}, [currentUser, navigate]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		try {
			await createUserWithEmailAndPassword(auth, email.value, password.value);
			setCurrentUser(true);
		} catch (error) {
			alert(error);
		}
	};
	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
	  				<Link to='/'>
					<img
						className='mx-auto h-10 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
						alt='Your Company'
					/>
					</Link>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Sign up
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					{/*Form Start*/} {/*Email*/}
					<form
						className='space-y-6'
						id='form'
						action=''
						method='POST'
						onSubmit={handleSubmit}
					>
						<div>
							<label
								htmlFor='email'
								className='block text-sm font-medium leading-6 text-gray-900'
							>
								Email address
							</label>
							<div className='mt-2'>
								<input
									id='email'
									name='email'
									type='email'
									autoComplete='email'
									//The onChange function is used to call the handleInputChange function
									//The handleInputChange function is used to set the data from the form

									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						{/*Password*/}
						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Password
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='password'
									name='password'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						{/*Confirm Password*/}
						<div>
							<div className='flex items-center justify-between'>
								<label
									htmlFor='password'
									className='block text-sm font-medium leading-6 text-gray-900'
								>
									Confirm Password
								</label>
							</div>
							<div className='mt-2'>
								<input
									id='confirmPassword'
									name='confirmPassword'
									type='password'
									autoComplete='current-password'
									required
									className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
								/>
							</div>
						</div>
						{/*Button*/}
						<div>
							<button
								type='submit'
								className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							>
								{' '}
								Sign up
							</button>
						</div>
					</form>
					{/*Form End*/}
					<p className='mt-10 text-center text-sm text-gray-500'>
						Already a member?{' '}
						<a
							href='/signin'
							className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
						>
							Sign in
						</a>
					</p>
				</div>
			</div>
		</>
	);
}
