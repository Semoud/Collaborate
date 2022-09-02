import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const AmenityCard = ({ data }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<div className='flex w-full flex-col items-center bg-slate-100 p-4'>
			<img className='w-6 sm:w-8' src={urlFor(data.icon)} alt={data.title} />
			<div className='mt-2'>
				{/* mt-6 sm:mt-0 sm:ml-3 */}
				<h2 className='text-center text-sm'>{data.title}</h2>
			</div>
		</div>
	);
};

export default AmenityCard;
