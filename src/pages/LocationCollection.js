import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import LocationsCard from '../components/LocationCard';

function LocationCollection() {
	const { slug } = useParams();
	const [location, setLocation] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "location"]{_id, slug, title, location, gallery}`)
			.then(data => setLocation(data))
			.catch(err => console.error(err));
	}, [slug]);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container'>
				<h2 className='text-3xl font-semibold md:text-4xl'>All buildings</h2>
				<div className='mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:mt-20 xl:gap-12'>{location && location.map(item => <LocationsCard data={item} scroll={false} key={item._id} />)}</div>
			</div>
		</div>
	);
}

export default LocationCollection;
