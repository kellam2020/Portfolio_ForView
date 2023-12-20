//that is used to measure the performance of a web page. It uses the Web Vitals library, which provides a number of metrics that can be used to measure aspects of a web page's performance.
/*
getCLS: Cumulative Layout Shift, measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
getFID: First Input Delay, measures the time from when a user first interacts with your site (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to respond to that interaction.
getFCP: First Contentful Paint, measures the time from when the page starts loading to when any part of the page's content is rendered on the screen.
getLCP: Largest Contentful Paint, measures the time from when the page starts loading to when the largest text block or image element is rendered on the screen.
getTTFB: Time to First Byte, measures the time from when the page starts loading to when it receives the first byte of data from the server.
*/

const reportWebVitals = (onPerfEntry) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
			getCLS(onPerfEntry);
			getFID(onPerfEntry);
			getFCP(onPerfEntry);
			getLCP(onPerfEntry);
			getTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;
