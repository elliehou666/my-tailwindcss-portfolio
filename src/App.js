import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import bgDay from './images/JPstreet-day.jpg';
import bgNight from './images/JPstreet-night.jpeg';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));


function App() {
	const [activeTheme, setTheme] = useThemeSwitcher();
	const [backgroundImage, setBackgroundImage] = useState(activeTheme === 'dark' ? bgDay : bgNight);
	const [overlayColor, setOverlayColor] = useState(activeTheme === 'dark' ? 'bg-primary-light' : 'bg-gray-700');

	 // Function to handle theme change
	const handleThemeChange = (newTheme) => {
		setBackgroundImage(newTheme === 'dark' ? bgDay : bgNight);
		setOverlayColor(newTheme === 'dark' ? 'bg-primary-light' : 'bg-gray-700');
	};

	return (
		<AnimatePresence>
			<div className="relative h-screen">
				<div>
                    <img src={backgroundImage} className="fixed h-full w-full z-0" />
					
                </div> 
				
				<div className={`absolute inset-0 mx-auto w-full sm:w-85/100 flex items-center bg-opacity-80 ${overlayColor} z-10`}></div>
				
				<div className="relative w-full h-full z-20">
					<Router>
						<ScrollToTop />
						<AppHeader onThemeChange={handleThemeChange}/>
						<Suspense fallback={""}>
						
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route
								path="projects/gpi"
								element={<ProjectSingle projectId="GPI"/>}
							/>
							<Route
								path="projects/findaopro"
								element={<ProjectSingle projectId="Findao"/>}
							/>
							<Route
								path="projects/findaoapp"
								element={<ProjectSingle projectId="FindaoApp"/>}
							/>
							<Route
								path="projects/mining"
								element={<ProjectSingle projectId="MiningApp"/>}
							/>
							<Route
								path="projects/exchange"
								element={<ProjectSingle projectId="FindaoExchange"/>}
							/>
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
						</Suspense>
						<AppFooter />
					</Router>
					<UseScrollToTop />
				</div>
				
			</div>
		</AnimatePresence>
	);
}

export default App;
