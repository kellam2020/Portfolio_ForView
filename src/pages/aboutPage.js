import React, { useState, useEffect } from 'react';
import AboutPage from './about';
import AboutPage2 from './about2';

//The purpose of this component is to make the about page responsive
//If the user is on a screen that is less than 1277px wide, then the about page will be displayed in a different way
function ResponsiveComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		// Cleanup function to remove the event listener
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	if (windowWidth > 1277) {
		return <AboutPage />;
	} else {
		return <AboutPage2 />;
	}
}

export default function Responsive() {
	return (
		<>
			<ResponsiveComponent />
		</>
	);
}
