import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const LocationsCard = ({ data }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};

	return (
		<Link className='min-w-[75%] max-w-[400px] snap-start sm:min-w-[40%]' to={'/location/' + data.slug.current} onClick={scrollToTop}>
			<div className='aspect-w-1 aspect-h-1 mb-6'>
				<img className='h-full w-full object-cover object-center' src={urlFor(data.gallery[0].thumbnail.asset)} alt={data.gallery[0].alt} />
			</div>
			<h3 className='text-xl font-semibold'>{data.title}</h3>
			<p>{data.location}</p>
		</Link>
	);
};

export default LocationsCard;
