import FeatureCardSkeleton from './FeatureCardSkeleton';

const FeaturesSkeleton = () => {
	const feature = [1, 2, 3];

	return (
		<>
			{feature.map(item => (
				<FeatureCardSkeleton key={item} />
			))}
		</>
	);
};

export default FeaturesSkeleton;
