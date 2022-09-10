import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import LocationCollection from './pages/LocationCollection';
import LocationSingle from './pages/LocationSingle';
import NotFound from './pages/NotFound';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Landing />} />
					<Route path='/locations' element={<LocationCollection />} />
					<Route path='/location/:slug' element={<LocationSingle />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
