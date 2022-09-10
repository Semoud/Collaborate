import LocationCardSkeleton from './LocationCardSkeleton';

const LocationsCollectionSkeleton = () => {
	const location = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			<div className='mt-5 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:mt-10 md:grid-cols-3 lg:mt-20 xl:gap-12'>
				{location.map(item => (
					<LocationCardSkeleton key={item} />
				))}
			</div>
		</>
	);
};

export default LocationsCollectionSkeleton;
