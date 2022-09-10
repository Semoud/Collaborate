const FeatureCardSkeleton = () => {
	return (
		<div className='flex w-full flex-col items-start sm:flex-row md:flex-col lg:flex-row'>
			<div className='base-skeleton h-7 w-7 shrink-0  grow-0 md:h-8 md:w-8 lg:h-10 lg:w-10' />
			<div className='mt-2 w-full sm:mt-0 sm:ml-4 md:ml-0 md:mt-4 lg:ml-6 lg:mt-0'>
				<div className='base-skeleton mb-1 h-0  w-0 sm:h-5 sm:w-[90%] lg:h-7' />
				<div className='base-skeleton h-5  w-[60%] lg:h-7' />
				<div className='mt-2 md:mt-4 lg:mt-6'>
					<div className='base-skeleton mb-2 h-4  w-[95%]' />
					<div className='base-skeleton mb-2 h-4  w-[90%]' />
					<div className='base-skeleton mb-2 h-4  w-[85%]' />
				</div>
			</div>
		</div>
	);
};

export default FeatureCardSkeleton;
