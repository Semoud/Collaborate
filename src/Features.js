import FeaturesCard from './FeatureCard';

const Features = () => {
	return (
		<div className='py-7 md:py-14 lg:py-28'>
			<div className='main-container flex flex-col lg:flex-row gap-14 lg:gap-10'>
				<FeaturesCard link='Find workspaces' icon='./assets/feature_desk.svg' title='Have your own private office or desk' detail='Bring teams of any size together with move-in ready spaces filled with business essentials and a friendly community.' />
				<FeaturesCard link='Sign up now' icon='./assets/feature_global.svg' title='Access locations close to wherever you are' detail='Get out of the house and do your best work with a monthly membership that unlocks unlimited access to hot desks globally.' />
				<FeaturesCard link='Download app' icon='./assets/feature_time.svg' title='Get workspace by the hour or day' detail='Book hot desks by the day and meeting rooms by the hour in nearby locations with the WeWork app. No monthly commitment.' />
			</div>
		</div>
	);
};

export default Features;
