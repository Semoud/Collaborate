export default {
	name: 'amenity',
	title: 'Amenity',
	type: 'document',
	fields: [
		{
			name: 'icon',
			title: 'Icon',
			type: 'image',
		},
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'icon',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
