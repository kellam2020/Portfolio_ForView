import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Homepage from './pages/homepage';
import Signup from './pages/Signup';
import GalleryPage from './pages/gallery';
import ModelGallery from './pages/modelgallery';
import ContactPage from './pages/contact';
import AboutPage from './pages/about';
import BookingsPage from './pages/bookings';
import BlogsPage from './pages/blog';
import PostedBlogs from './pages/postedBlogs';
import Navbar from './components/Navbar';
import AboutPage2 from './pages/about2';
import Responsive from './pages/aboutPage';

import User from './pages/userPage';

import Home from './pages/Home';
import { AuthProvider } from './Auth';

export default function App() {
	return (
		//This is how you set up routes in react
		//The path is the url path
		//The element is the component that will be displayed
		//Make sure to install react-router-dom and then import Routes and Route
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Homepage />} />
				<Route path='/signin' element={<Signin />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='/userPage' element={<User />} />
				<Route path='/home' element={<Home />} />
				<Route path='/gallery' element={<GalleryPage />} />
				<Route path='/modelgallery' element={<ModelGallery />} />
				<Route path='/contact' element={<ContactPage />} />
				<Route path='/about' element={<AboutPage />} />
				<Route path='/bookings' element={<BookingsPage />} />
				<Route path='/blogs' element={<BlogsPage />} />
				<Route path='/postedBlogs' element={<PostedBlogs />} />
				<Route path='/navbar' element={<Navbar />} />
				<Route path='/about2' element={<AboutPage2 />} />
				<Route path='/aboutPage' element={<Responsive />} />
			</Routes>
		</AuthProvider>
	);
}

/*
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { useState } from 'react';
import './App.css';
import { PrismaClient } from '@prisma/client';
 


 
const [navbarHidden, setNavbarHidden] = useState(true);

	const toggleNavbar = () => {
		console.log('toggling navbar');
		setNavbarHidden(!navbarHidden);
	};

	console.log('navbarHidden:', navbarHidden);


		<>
			<div className='header'>
				<div className='hamburger-menu' onClick={toggleNavbar}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>

			<Navbar
				expand='lg'
				className={`  ${navbarHidden ? 'hidden' : ''} custom-navbar `}
			>
				<Navbar.Brand href='#home' className='custom-brand '>
					Home
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />

				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ml-auto justify-content-center'>
						<Nav.Link href='#link'>Me</Nav.Link>
						<Nav.Link href='#link'>Them</Nav.Link>
						<Nav.Link href='#link'>Lets Talk</Nav.Link>
						<Nav.Link href='#link'>Lets Create</Nav.Link>
						<Nav.Link href='#link' className='mr-3'>
							Join
						</Nav.Link>
						<NavDropdown title='Log In' id='basic-nav-dropdown'>
							<NavDropdown.Item href='#action/3.1'>Client</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.2'>Member</NavDropdown.Item>
							<NavDropdown.Item href='#action/3.3'>Guest</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href='#action/3.4'>
								Separated link
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<div className='photo1'></div>
		</>
		*/
