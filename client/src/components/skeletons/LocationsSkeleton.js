import LocationCardSkeleton from './LocationCardSkeleton';

const LocationsSkeleton = () => {
	const location = [1, 2, 3];

	return (
		<>
			<div className='base-skeleton h-8 w-[33.33%] md:h-9' />
			<div className=' mt-5 flex gap-12 overflow-hidden md:mt-10 lg:mt-20'>
				{location.map(item => (
					<LocationCardSkeleton key={item} />
				))}
			</div>
		</>
	);
};

export default LocationsSkeleton;
