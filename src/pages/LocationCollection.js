import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import AmenityFilter from '../components/AmenityFilter';
import FilterNotFound from '../components/FilterNotFound';
import LocationsCard from '../components/LocationCard';
import LocationsCollectionSkeleton from '../components/skeletons/LocationsCollectionSkeleton';

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
		const list = activeFilters.map(item => `"${item}"`).join(',');
		// const query = `*[_type == "location"${activeFilters.length >= 1 ? ' && (references(' + list + '))' : ''}]{_id, slug, title, location, gallery}`;
		sanityClient
			.fetch(`*[_type == "location"${activeFilters.length >= 1 ? ' && amenities[]._ref match [' + list + ']' : ''}]{_id, slug, title, location, gallery}`)
			.then(data => setLocation(data))
			.catch(err => console.error(err));

		console.log(activeFilters);
	}, [activeFilters]);

	const resetFilters = () => {
		setActiveFilters([]);
	};

	const [location, setLocation] = useState();
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "location"]{_id, slug, title, location, gallery}`)
			.then(data => setLocation(data))
			.catch(err => console.error(err));
	}, [slug]);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container'>
				<div className='grid-col-1 relative grid gap-3 md:grid-cols-2'>
					<div>
						<h2 className='text-3xl font-semibold md:text-4xl'>All buildings</h2>
					</div>
					{amenities && (
						<div className='overflow-hidden'>
							<p className='text-lg font-medium'>Filter results</p>
							<div className='no-scrollbar flex flex-nowrap gap-1 overflow-scroll pt-2'>
								{/* TODO: TURN THIS TO A DROPDOWN WITH SORT BY NEXT TO IT */}
								{amenities.map(item => (
									<AmenityFilter data={item} trigger={toggleFilter} isActive={activeFilters.includes(item._id) ? 'true' : 'false'} key={item._key} />
								))}
							</div>
						</div>
					)}
				</div>
				{location ? (
					<>
						{location.length >= 1 ? (
							<div className='mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:mt-20 xl:gap-12'>
								{location.map(item => (
									<LocationsCard data={item} scroll={false} key={item._id} />
								))}
							</div>
						) : (
							<FilterNotFound />
						)}
					</>
				) : (
					<LocationsCollectionSkeleton />
				)}
			</div>
		</div>
	);
}

export default LocationCollection;
