import Hero from '../components/Hero';
import Features from '../components/Features';
import Locations from '../components/Locations';

function Landing() {
	return (
		<>
			<Hero />
			<Features />
			<Locations title={'49 Locations near you'} slugExclude={null} />
		</>
	);
}

export default Landing;
