const FilterNotFound = ({ resetFiltersCallback }) => {
	return (
		<div className='mx-auto mt-16 flex flex-col items-center justify-center gap-2 sm:flex-row sm:items-start'>
			<img src={'./assets/telescope-light.svg'} alt='No results found' className='w-10 sm:mt-1 sm:w-8' />
			<div className='mt-3 flex flex-col items-center text-center sm:ml-3 sm:mt-0 sm:items-start sm:text-left'>
				<p className='text-lg font-medium '>Sorry, we couldn't find the location you was looking for.</p>
				<p>We wasn’t able to find any matches, please try modifying your search criteria.</p>
				<button onClick={() => resetFiltersCallback()} className='mt-3 flex gap-2'>
					<img src={'./assets/arrow-rotate-right-regular.svg'} alt='No results found' className='w-4' />
					Reset filters
				</button>
			</div>
		</div>
	);
};

export default FilterNotFound;
