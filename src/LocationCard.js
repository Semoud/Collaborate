const LocationsCard = props => {
	return (
		<a className='min-w-[75%] max-w-[400px] snap-start sm:min-w-[40%]' href='https://www.semoud.com'>
			<div className='relative  mb-6 h-0 overflow-hidden pb-square'>
				<img className='absolute h-full w-full object-cover' src={props.image} alt={props.name} />
			</div>
			<h3 className='text-xl font-semibold'>{props.name}</h3>
			<p>{props.area}</p>
		</a>
	);
};

export default LocationsCard;
