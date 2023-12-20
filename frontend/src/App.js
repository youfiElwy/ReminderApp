import './App.css';
// import { Route, Router, Routes } from 'react-router-dom';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Homepage from './pages/homepage/homepage';
import LogSignPage from './pages/logsignpage/logsignpage';
import AddReminderPage from './pages/addreminderpage/addreminderpage';
import FrequentReminderPage from './pages/frequentreminderpage/frequentreminderpage';
import SensitiveReminderPage from './pages/sensitivereminderpage/sensitivereminderpage';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
	const location = useLocation();
	const [showNavNFooter, setShowNavNFooter] = useState(false);

	// Update Local Storage when the state changes
	useEffect(() => {
		if (location.pathname === '/') {
			setShowNavNFooter(false);
		}
	}, []);

	return (
		<>
			<Navbar showNavNFooter={showNavNFooter} setShowNavNFooter={setShowNavNFooter} />
			<AnimatePresence>
				<Routes location={location} key={location.key}>
					<Route path="/" element={<LogSignPage setShowNavNFooter={setShowNavNFooter} />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/add-reminder" element={<AddReminderPage />} />
					<Route path="/reminders-frequent" element={<FrequentReminderPage />} />
					<Route path="/reminders-sensitive" element={<SensitiveReminderPage />} />
				</Routes>
			</AnimatePresence>
			<Footer showNavNFooter={showNavNFooter} />
		</>
	);
}

export default App;

