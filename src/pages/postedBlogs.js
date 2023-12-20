import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function PostedBlogs() {
	//The useLocation hook returns the location object that represents the current URL.
	//The state property contains the state that was passed to the navigate function.
	const location = useLocation();
	const { firstName, lastName, thoughts, image } = location.state || {};
	return (
		<>
			<Navbar />

			<div className='mt-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
				<div className='md:flex'>
					<div className='md:flex-shrink-0'>
						{image && (
							<img
								className='h-48 w-full object-cover md:w-48'
								src={image}
								alt='Uploaded'
							/>
						)}
					</div>
					<div className='p-8'>
						<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>{`${firstName} ${lastName}`}</div>
						<div className='mt-2 text-gray-500'>{thoughts}</div>
					</div>
				</div>
			</div>
		</>
	);
}
