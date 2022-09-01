import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const FeaturesCard = ({ data }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<div className='flex w-full flex-col items-start sm:max-w-[33.3333333333%] sm:flex-row'>
			<img className=' w-10' src={urlFor(data.icon)} alt={'data.title'} />
			<div className='mt-6 sm:mt-0 sm:ml-6'>
				<h2 className='text-3xl font-semibold'>{data.title}</h2>
				<p className='mt-6'>{data.body}</p>
				<a className='mt-6 block' href={data.link} target='_blank' rel='noreferrer'>
					{data.cta + ' ›'}
				</a>
			</div>
		</div>
	);
};

export default FeaturesCard;
