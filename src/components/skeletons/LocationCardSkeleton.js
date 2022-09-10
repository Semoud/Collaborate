const LocationCardSkeleton = () => {
	return (
		<div className='min-w-[75%] max-w-[400px] snap-start sm:min-w-[40%]'>
			<div className='aspect-w-1 aspect-h-1 mb-3 xl:mb-6'>
				<div className='base-skeleton h-full w-full object-cover object-center' />
			</div>
			<div className='base-skeleton mb-2 h-5 w-[33.33%] xl:h-6' />
			<div className='base-skeleton h-4 w-[25%]' />
		</div>
	);
};

export default LocationCardSkeleton;
