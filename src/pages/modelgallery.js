import IMAGES from '../images/images.js';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Navbar from '../components/Navbar.js';
Modal.setAppElement('#root'); // For accessibility

export default function ModelGallery() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const handleClick = (image) => {
		setSelectedImage(image);
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<>
			<Navbar />
			<br></br>
			{/*Images are in the images.js. Make sure to import images at the top*/}
			<div className='grid grid-cols-4 gap-4'>
				<img
					src={IMAGES.imgOne}
					alt='Micheala-1'
					onClick={() => handleClick(IMAGES.imgOne)}
				/>
				<img
					src={IMAGES.imgThree}
					alt='Micheala-3'
					onClick={() => handleClick(IMAGES.imgThree)}
				/>
				<img
					src={IMAGES.imgFour}
					alt='Micheala-4'
					onClick={() => handleClick(IMAGES.imgFour)}
				/>
				<img
					src={IMAGES.imgFive}
					alt='Micheala-5'
					onClick={() => handleClick(IMAGES.imgFive)}
				/>
				{/*react-modal is a library for creating accessible modal dialog components in React applications. 
				A modal dialog is a type of window that is displayed on top of the main content and requires user 
				interaction before they can return to the main content. */}

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel='Image Modal'
					style={{
						content: {
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							textAlign: 'center',
							backgroundColor: 'rgba(0, 0, 0, 0)',
							border: 'none',
						},
					}}
				>
					<div
						onClick={closeModal}
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{selectedImage && (
							<img
								src={selectedImage}
								alt='Selected'
								style={{
									width: '32%',
									height: '32%',
									minWidth: '300px', // Minimum width
									minHeight: '200px', // Minimum height
								}}
							/>
						)}
					</div>
				</Modal>
			</div>
		</>
	);
}
