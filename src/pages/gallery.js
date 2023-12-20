import IMAGES from '../images/images.js';
import React, { useState } from 'react';
import Modal from 'react-modal';
import Navbar from '../components/Navbar.js';

Modal.setAppElement('#root'); // For accessibility

export default function GalleryPage() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const handleClick = (image) => {
		setSelectedImage(image);
		setModalIsOpen(true);
	};
	const closeModal = () => {
		setModalIsOpen(false);
	};
	// This function prevents the right click menu from appearing on the images
	const handleRightClick = (event) => {
		event.preventDefault();
	};
	return (
		<>
			<Navbar />
			<div className='grid grid-cols-5 gap-4'>
				<img
					src={IMAGES.imgOne}
					alt='Micheala-1'
					onClick={() => handleClick(IMAGES.imgOne)}
					onContextMenu={handleRightClick}
				/>
				<img
					src={IMAGES.imgTwo}
					alt='Micheala-2'
					onClick={() => handleClick(IMAGES.imgTwo)}
					onContextMenu={handleRightClick}
				/>
				<img
					src={IMAGES.imgThree}
					alt='Micheala-3'
					onClick={() => handleClick(IMAGES.imgThree)}
					onContextMenu={handleRightClick}
				/>
				<img
					src={IMAGES.imgFour}
					alt='Micheala-4'
					onClick={() => handleClick(IMAGES.imgFour)}
					onContextMenu={handleRightClick}
				/>
				<img
					src={IMAGES.imgFive}
					alt='Micheala-5'
					onClick={() => handleClick(IMAGES.imgFive)}
					onContextMenu={handleRightClick}
				/>

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
						},
					}}
				>
					{selectedImage && (
						<img
							src={selectedImage}
							alt='Selected'
							style={{ width: '400px', height: '600px' }}
							onContextMenu={handleRightClick}
						/>
					)}
				</Modal>
			</div>
		</>
	);
}
