import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: process.env.REACT_APP_SANITY_CLIENT_PROJECT_ID,
	dataset: process.env.REACT_APP_SANITY_CLIENT_DATASET,
	apiVersion: process.env.REACT_APP_SANITY_CLIENT_API_VERSION,
});
