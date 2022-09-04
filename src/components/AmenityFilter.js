import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';

const AmenityFilter = ({ data, trigger, isActive }) => {
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	return (
		<button onClick={() => trigger(data._id)} className={`flex w-full items-center border bg-slate-100 p-1 ${isActive === 'true' ? 'border-black' : 'border-transparent'}`}>
			<img className='w-2 sm:w-4' src={urlFor(data.icon)} alt={data.title} />
			<div className='ml-2'>
				<h2 className='text-sm'>{data.title}</h2>
			</div>
		</button>
	);
};

export default AmenityFilter;
