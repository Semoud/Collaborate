import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import AmenityFilter from '../components/AmenityFilter';
import LocationsCard from '../components/LocationCard';

function LocationCollection() {
	const { slug } = useParams();

	const [amenities, setAmenities] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "amenity"]{_id, icon, title}`)
			.then(data => setAmenities(data))
			.catch(err => console.error(err));
	}, [slug]);

	const [activeFilters, setActiveFilters] = useState([]);
	const toggleFilter = id => {
		if (activeFilters.includes(id)) setActiveFilters(activeFilters.filter(item => item !== id));
		if (!activeFilters.includes(id)) setActiveFilters([...activeFilters, id]);
	};
	useEffect(() => {
		// TODO: MAKE QUERY RETURN LOCATIONS THAT MATCH ALL FILTERS NOT ANY.
		const list = activeFilters.map(item => `"${item}"`).join(',');
		const query = `*[_type == "location"${activeFilters.length >= 1 ? ' && (references([' + list + ']))' : ''}]{_id, slug, title, location, gallery}`;
		sanityClient
			.fetch(query)
			.then(data => setLocation(data))
			.catch(err => console.error(err));

		console.log(activeFilters, query);
	}, [activeFilters]);

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
				<div className='grid-col-1 relative grid md:grid-cols-2'>
					<h2 className='text-3xl font-semibold md:text-4xl'>All buildings</h2>
					{amenities && (
						<div>
							<p>Filters</p>
							<div className='grid grid-cols-2 gap-1'>
								{amenities.map(item => (
									<AmenityFilter data={item} trigger={toggleFilter} isActive={activeFilters.includes(item._id) ? 'true' : 'false'} key={item._key} />
								))}
							</div>
						</div>
					)}
				</div>
				<div className='mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:mt-20 xl:gap-12'>{location && location.map(item => <LocationsCard data={item} scroll={false} key={item._id} />)}</div>
			</div>
		</div>
	);
}

export default LocationCollection;
