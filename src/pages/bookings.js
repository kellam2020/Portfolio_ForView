import Navbar from '../components/Navbar';

export default function BookingsPage() {
	return (
		<>
			<Navbar />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<div
					style={{
						backgroundColor: '#EEEFF1',
						width: '80%',
					}}
				>
					<iframe
						src='https://calendar.google.com/calendar/appointments/schedules/AcZssZ0TgOO9tIUMfttPFTTaraGYKxd0_e6LCNnh1qUWrJkxG_BzZWAXSPQevm6ueDEjOZcOApleKuH-?gv=true'
						style={{
							border: 0,
							width: '100%',
							height: '600px',
							marginTop: '10px',
						}}
					/>
				</div>
			</div>
		</>
	);
}
