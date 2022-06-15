const FeaturesCard = props => {
	return (
		<div className='flex w-full flex-col items-start sm:flex-row'>
			<img className=' w-10' src={props.icon} alt={props.title} />
			<div className='mt-6 sm:mt-0 sm:ml-6'>
				<h2 className='text-3xl font-semibold'>{props.title}</h2>
				<p className='mt-6'>{props.detail}</p>
				<a className='mt-6 block' href='http://www.semoud.com'>
					{props.link} ›
				</a>
			</div>
		</div>
	);
};

export default FeaturesCard;
