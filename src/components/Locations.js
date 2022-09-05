import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import LocationsCard from './LocationCard';

function Locations({ title, slugExclude, scroll }) {
	const { slug } = useParams();
	const [location, setLocation] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "location" && !(slug.current == "${slugExclude}")]{_id, slug, title, location, gallery}`)
			.then(data => setLocation(data))
			.catch(err => console.error(err));
	}, [slug, slugExclude]);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container'>
				<h2 className='text-3xl font-semibold md:text-4xl'>{title}</h2>
				<div className='no-scrollbar mt-5 flex snap-x snap-mandatory snap-always gap-12 overflow-scroll md:mt-10 lg:mt-20'>{location && location.map(item => <LocationsCard data={item} scroll={scroll} key={item._id} />)}</div>
			</div>
		</div>
	);
}

export default Locations;
