import { useState, useEffect } from 'react';
import sanityClient from '../client';
import LocationsCard from './LocationCard';

function Locations() {
	const [location, setLocation] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "location"]{_id, slug, title, location, thumbnail}`)
			.then(data => setLocation(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container'>
				<h2 className='text-3xl font-semibold md:text-4xl'>49 Locations near you</h2>
				<div className='no-scrollbar mt-5 flex snap-x snap-mandatory snap-always gap-12 overflow-scroll md:mt-10 lg:mt-20'>{location && location.map(item => <LocationsCard data={item} key={item._id} />)}</div>
			</div>
		</div>
	);
}

export default Locations;
