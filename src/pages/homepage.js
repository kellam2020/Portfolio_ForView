import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Signin from './Signin';
import { Fragment, useState,useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	Bars3Icon,
	BellIcon,
	XMarkIcon,
	BarsIcon,
} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { AuthContext } from '../Auth'; // adjust the path according to your project structure
import { app, auth } from '../firebase.js';
import { getAuth, signOut } from 'firebase/auth';
import homepageTitle from '../images/homepageTitle.png';
import Navbar from '../components/Navbar';

import '../App.css';

//This function is used to set the class names for the navbar
//The classes are used to hide the navbar
function classNames(...classes) {
	//The return statement is used to return the class names
	//The classes.filter function is used to filter out the classes that are not needed
	//The classes.join function is used to join the classes together
	//The Boolean function is used to convert the classes to a boolean
	//The classes need to be converted to a boolean because the classes are being used in a conditional statement
	return classes.filter(Boolean).join(' ');
}

export default function Homepage() {
	const { currentUser } = useContext(AuthContext);
	const [isNavbarHidden, setIsNavbarHidden] = useState(true);

	const navigation = [
		{ name: 'Me', href: '/about', current: false },
		{ name: 'Them', href: '/modelgallery', current: false },
		{ name: "Let's Create", href: '/bookings', current: false },
		{ name: 'Contact Me', href: '/contact', current: false },
		currentUser ? { name: 'Blog', href: '/blogs', current: false } : '',
		currentUser
			? {
					name: 'Send Anywhere',
					href: 'https://send-anywhere.com/',
					current: false,
			  }
			: "",
		!currentUser && { name: 'Sign in', href: '/signin', current: true },
	];

	const toggleNavbar = () => {
		//The setIsNavbarHidden function is used to set the isNavbarHidden hook
		//The !isNavbarHidden is used to toggle the navbar
		setIsNavbarHidden(!isNavbarHidden);
	};

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		// Clean up the event listener when the component unmounts
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{/* First Conditional Statement*/}
			{windowWidth <= 639 ? (
				<Navbar /> // Use the Navbar component when window width is 639px or less
			) : (
				<div className={`navbar ${isNavbarHidden ? 'hidden' : ''}`}>
					<Disclosure as='nav' className='bg-red-400'>
						{({ open }) => (
							<>
								<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-1'>
									<div className='relative flex h-16 items-center justify-between'>
										<div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
											{/* Mobile menu button*/}
											<Disclosure.Button className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
												<span className='absolute -inset-0.5' />
												<span className='sr-only'>Open main menu</span>
												{open ? (
													<XMarkIcon
														className='block h-6 w-6'
														aria-hidden='true'
													/>
												) : (
													<Bars3Icon
														className='block h-6 w-6'
														aria-hidden='true'
													/>
												)}
											</Disclosure.Button>
										</div>
										<div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
											<div className='flex flex-shrink-0 items-center'>
												<img
													className='h-8 w-auto'
													src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
													alt='Your Company'
												/>
											</div>
											{/*The other conditional statement */}
											<div
												className={` lg:block lg:ml-6 ${
													isNavbarHidden ? '' : 'block'
												}`}
											>
												<div className='flex space-x-4 '>
													{navigation.map((item) => (
														<a
															key={item.name}
															href={item.href}
															className={classNames(
																item.current
																	? 'bg-gray-900 text-white'
																	: 'text-gray-300 hover:bg-gray-700 hover:text-white',
																'rounded-md px-3 py-2 text-sm font-medium'
															)}
															aria-current={item.current ? 'page' : undefined}
														>
															{item.name}
														</a>
													))}
												</div>
											</div>
										</div>
										<div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
											{/* When the user logs in */}
											{currentUser && (
												<>
													<button
														type='button'
														className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
													>
														<span className='absolute -inset-1.5' />
														<span className='sr-only'>View notifications</span>
														<BellIcon className='h-6 w-6' aria-hidden='true' />
													</button>

													{/* Profile dropdown */}
													<Menu as='div' className='relative ml-3'>
														<div>
															<Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
																<span className='absolute -inset-1.5' />
																<span className='sr-only'>Open user menu</span>
																<img
																	className='h-8 w-8 rounded-full'
																	src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
																	alt=''
																/>
															</Menu.Button>
														</div>
														<Transition
															as={Fragment}
															enter='transition ease-out duration-100'
															enterFrom='transform opacity-0 scale-95'
															enterTo='transform opacity-100 scale-100'
															leave='transition ease-in duration-75'
															leaveFrom='transform opacity-100 scale-100'
															leaveTo='transform opacity-0 scale-95'
														>
															<Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
																<Menu.Item>
																	{({ active }) => (
																		<a
																			href='#'
																			className={classNames(
																				active ? 'bg-gray-100' : '',
																				'block px-4 py-2 text-sm text-gray-700'
																			)}
																		>
																			Your Profile
																		</a>
																	)}
																</Menu.Item>
																<Menu.Item>
																	{({ active }) => (
																		<a
																			href='#'
																			className={classNames(
																				active ? 'bg-gray-100' : '',
																				'block px-4 py-2 text-sm text-gray-700'
																			)}
																		>
																			Settings
																		</a>
																	)}
																</Menu.Item>
																<Menu.Item>
																	{({ active }) => (
																		<a
																			href='#'
																			onClick={() => auth.signOut()}
																			className={classNames(
																				active ? 'bg-gray-100' : '',
																				'block px-4 py-2 text-sm text-gray-700'
																			)}
																		>
																			Sign out
																		</a>
																	)}
																</Menu.Item>
															</Menu.Items>
														</Transition>
													</Menu>
												</>
											)}
										</div>
									</div>
								</div>

								<Disclosure.Panel className='sm:hidden'>
									<div className='space-y-1 px-2 pb-3 pt-2'>
										{navigation.map((item) => (
											<Disclosure.Button
												key={item.name}
												as='a'
												href={item.href}
												className={classNames(
													item.current
														? 'bg-gray-900 text-white'
														: 'text-gray-300 hover:bg-gray-700 hover:text-white',
													'block rounded-md px-3 py-2 text-base font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Disclosure.Button>
										))}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			)}
			<div className='photo1'>
				<div className='flex items-center justify-center'>
					{windowWidth > 639 && (
						<Bars3Icon
							className='block h-32 w-20'
							aria-hidden='true'
							onClick={toggleNavbar}
						/>
					)}
				</div>
			</div>
		</>
	);
}
