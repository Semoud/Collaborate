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
			<div className='main-container flex flex-col gap-14 lg:flex-row lg:gap-10'>
				{feature && feature.map(item => <FeaturesCard data={item} key={item._id} />)}

				{/* <FeaturesCard link='Find workspaces' icon='./assets/feature_desk.svg' title='Have your own private office or desk' detail='Bring teams of any size together with move-in ready spaces filled with business essentials and a friendly community.' />
				<FeaturesCard link='Sign up now' icon='./assets/feature_global.svg' title='Access locations close to wherever you are' detail='Get out of the house and do your best work with a monthly membership that unlocks unlimited access to hot desks globally.' />
				<FeaturesCard link='Download app' icon='./assets/feature_time.svg' title='Get workspace by the hour or day' detail='Book hot desks by the day and meeting rooms by the hour in nearby locations with the WeWork app. No monthly commitment.' /> */}
			</div>
		</div>
	);
};

export default Features;
