import { useState, useEffect } from 'react';
import sanityClient from '../client';
import FeaturesCard from './FeatureCard';

const Features = () => {
	const [feature, setFeature] = useState([]);
	useEffect(() => {
		sanityClient
			.fetch(`*[_type == "feature"]{_id, title, icon, body, cta, link}`)
			.then(data => setFeature(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container flex flex-col gap-14 lg:flex-row lg:gap-10'>{feature && feature.map(item => <FeaturesCard data={item} key={item._id} />)}</div>
		</div>
	);
};

export default Features;
