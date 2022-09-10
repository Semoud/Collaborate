export default {
	name: 'feature',
	title: 'Feature',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'image',
		},
		{
			name: 'body',
			title: 'Body',
			type: 'text',
		},
		{
			name: 'link',
			title: 'Link',
			type: 'url',
		},
		{
			name: 'cta',
			title: 'Call to Action',
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
