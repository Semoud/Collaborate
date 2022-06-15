const LocationsCard = props => {
	return (
		<a className='snap-start min-w-[75%] sm:min-w-[40%] max-w-[400px]' href='https://www.semoud.com'>
			<div className='relative  pb-square overflow-hidden h-0 mb-6'>
				<img className='absolute w-full h-full object-cover' src={props.image} alt />
			</div>
			<h3 className='text-xl font-semibold'>{props.name}</h3>
			<p>{props.area}</p>
		</a>
	);
};

export default LocationsCard;
