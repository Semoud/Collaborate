import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import AmenityCard from '../components/AmenityCard';
import Locations from '../components/Locations';

function LocationSingle() {
	const { slug } = useParams();
	const builder = imageUrlBuilder(sanityClient);
	function urlFor(source) {
		return builder.image(source);
	}

	const [locationData, setLocationData] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "location" && slug.current == "${slug}"]{_id, title, location, info, amenities[]->{title, icon}, gallery}`)
			.then(data => setLocationData(data[0]))
			.catch(err => console.error(err));
		console.log(slug);
	}, [slug]);

	return (
		<>
			<div className='py-7 md:py-14 lg:py-28'>
				<div className='main-container grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10'>
					{locationData && (
						<>
							<div className='grid grid-cols-1 gap-4'>
								{locationData.gallery &&
									locationData.gallery.map(item => (
										<div className='aspect-w-4 aspect-h-3' key={item._id}>
											<img src={urlFor(item.thumbnail.asset)} alt={item.alt} className='h-full w-full object-cover object-center' />
										</div>
									))}
							</div>
							<div className='relative'>
								<div className='sticky top-6 flex flex-col gap-6'>
									<div>
										<h1 className='pb-1 text-3xl font-medium'>{locationData.title}</h1>
										<p className='text-lg font-normal'>{locationData.location}</p>
									</div>
									{locationData.info && (
										<div>
											<h2 className='pb-1 text-xl font-medium'>Information</h2>
											<p className=''>{locationData.info}</p>
										</div>
									)}
									{locationData.amenities && (
										<div>
											<h2 className='pb-2 text-xl font-medium'>Amenities</h2>
											<div className='grid grid-cols-2 gap-2 md:grid-cols-3'>
												{locationData.amenities.map(item => (
													<AmenityCard data={item} key={item._key} />
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</>
					)}
				</div>
			</div>
			<Locations title={'Nearby buildings'} slugExclude={`${slug}`} />
		</>
	);
}

export default LocationSingle;
