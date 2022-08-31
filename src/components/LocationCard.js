import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const LocationsCard = ({ data }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<a className='min-w-[75%] max-w-[400px] snap-start sm:min-w-[40%]' href='https://www.semoud.com'>
			<div className='relative  mb-6 h-0 overflow-hidden pb-square'>
				<img className='absolute h-full w-full object-cover' src={urlFor(data.thumbnail)} alt={data.title} />
			</div>
			<h3 className='text-xl font-semibold'>{data.title}</h3>
			<p>{data.location}</p>
		</a>
	);
};

export default LocationsCard;
