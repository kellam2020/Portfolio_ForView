import React from 'react';

import '../App.css';
import Navbar from '../components/Navbar';
import TK from '../TK.jpg';
import ColumbusState from '../images/columbusState.jpg';
import TK_Sitting from '../images/TK_Sitting.jpg';

export default function AboutPage() {
	return (
		<>
			<Navbar />
			<center>
				<center>
					<h1 className='text-5xl'>About Me Page</h1>
					<br></br>
					<img src={TK} alt='TK' width='500' height='600' />
					<br></br>
					<div style={{ maxWidth: '1000px' }}>
						<p style={{ textAlign: 'justify' }}>
							I am a Portrait photographer based out of Columbus, Ohio. Back in
							2015 is when I first picked up a camera in high school. At that
							time, I didn’t really know what I really enjoyed about
							photography, and so I would have told you then that I was a
							photographer. It wasn’t until later in life after pursuing several
							years of different types of photography that I realized that
							photographing people was something that I really enjoyed. I really
							love capturing raw moments, and the different emotions that come
							photographing people. My goal is to one day take this love that I
							have for photographing people and transform it into a full-time
							career.
						</p>
					</div>
				</center>
				<br></br>
				<div className='container h-custom flex flex-col sm:flex-row items-center justify-center'>
					<div className='left-div'>
						<img src={ColumbusState} alt='TK' width='700' height='600' />
					</div>
					<div
						style={{ maxWidth: '550px' }}
						className='right-div flex items-center justify-center h-full'
					>
						I attended Columbus State Community College where I studied and
						obtained an associate degree in web development. The goal was to
						combine my skills in both web development and photography and turn
						it into a career where I would exercise my creative skills in web
						design. Though being a full-time portrait photographer is still my
						main goal, it is nice to also have another set of skills that could
						allow me to put my foot in the door of other careers. My skills in
						web development have allowed me to create the website that you are
						on right now. One thing that you will notice about me is that I
						enjoy being able to do things on my own, and so rather than using a
						service like Squarespace to create my website, I figured it be in my
						best interest to just create one from scratch since I have the
						skills to do so.
					</div>
				</div>

				<div className='container h-custom'>
					<div
						style={{ maxWidth: '550px' }}
						className='right-div flex items-center justify-center h-full'
					>
						When you look at my work, I hope that the words that come to mind
						are raw, intimate, and candid. One of my favorite parts of
						photographing people is that I get to capture fleeting emotions, the
						type that you don’t expect but that make the photograph so much more
						real and genuine. I love getting to know the people I photograph so
						that I can build small friendship with them so that during the
						shoot, we both enjoy our time together and are both comfortable.
						Another thing that you will see often in my work is that the way I
						photograph people is always natural as I don’t do a lot of directing
						unless needed. I like this approach because it looks less staged. I
						always encourage the people I photograph to be selfish when
						preparing for my shoots. My photoshoots will always be about the
						person I am photographing, and so however they envision the shoot
						looking like is how it will be in the end.
					</div>
					<div className='left-div'>
						<img src={TK_Sitting} alt='TK' width='500' height='600' />
					</div>
				</div>
			</center>
		</>
	);
}
