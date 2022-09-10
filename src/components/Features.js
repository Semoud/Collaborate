import { useState, useEffect } from 'react';
import sanityClient from '../client';
import FeaturesCard from './FeatureCard';
import FeaturesSkeleton from './skeletons/FeaturesSkeleton';

const Features = () => {
	const [feature, setFeature] = useState(null);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "feature"]{_id, title, icon, body, cta, link}`)
			.then(data => setFeature(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container grid grid-cols-1 grid-rows-none gap-14 md:grid-cols-3 md:gap-8 lg:gap-10'>{feature ? feature.map(item => <FeaturesCard data={item} key={item._id} />) : <FeaturesSkeleton />}</div>
		</div>
	);
};

export default Features;
