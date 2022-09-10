import AmenityCardSkeleton from './AmenityCardSkeleton';

const LocationsSkeleton = () => {
	const amenities = [1, 2, 3, 4, 5, 6];

	return (
		<>
			<div className='flex flex-row gap-4 sm:grid sm:grid-cols-1'>
				<div className='h-full min-w-full'>
					<div className='aspect-w-4 aspect-h-3'>
						<div className='base-skeleton h-full w-full object-cover object-center' />
					</div>
				</div>
			</div>
			<div className='relative'>
				<div className='sticky top-6 flex flex-col gap-6'>
					<div>
						<div className='base-skeleton mb-1 h-8 w-[50%] pb-1' />
						<div className='base-skeleton h-4 w-[33.33%]' />
					</div>
					<div>
						<div className='base-skeleton mb-2 h-5 w-[20%] pb-1' />
						<div className='base-skeleton mb-1 h-4 w-[95%]' />
						<div className='base-skeleton mb-1 h-4 w-[90%]' />
						<div className='base-skeleton mb-1 h-4 w-[80%]' />
					</div>
					<div>
						<div className='base-skeleton mb-2 h-5 w-[20%] pb-1' />
						<div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
							{amenities.map(item => (
								<AmenityCardSkeleton key={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LocationsSkeleton;
