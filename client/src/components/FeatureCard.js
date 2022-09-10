import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const FeaturesCard = ({ data }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<div className='flex w-full flex-col items-start sm:flex-row md:flex-col lg:flex-row'>
			<img className='w-6 md:w-8 lg:w-10' src={urlFor(data.icon)} alt={data.title} />
			<div className='mt-2 sm:mt-0 sm:ml-4 md:ml-0 md:mt-4 lg:ml-6 lg:mt-0'>
				<h2 className='text-lg font-semibold md:text-xl lg:text-3xl'>{data.title}</h2>
				<p className='mt-2 md:mt-4 lg:mt-6'>{data.body}</p>
				<a className='mt-2 block md:mt-4 lg:mt-6' href={data.link} target='_blank' rel='noreferrer'>
					{data.cta + ' ›'}
				</a>
			</div>
		</div>
	);
};

export default FeaturesCard;
