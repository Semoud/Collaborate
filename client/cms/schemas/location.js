export default {
	name: 'location',
	title: 'Location',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string',
		},
		{
			name: 'gallery',
			title: 'Gallery',
			type: 'array',
			of: [
				{
					name: 'images',
					title: 'Images',
					type: 'object',
					fields: [
						{
							name: 'thumbnail',
							title: 'Thumbnail',
							type: 'image',
							options: {
								hotspot: true,
							},
						},
						{
							name: 'alt',
							title: 'Alt Text',
							type: 'string',
						},
					],
				},
			],
		},
		{
			name: 'info',
			title: 'Information',
			type: 'text',
		},
		{
			name: 'amenities',
			title: 'Amenities',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'amenity' } }],
		},
	],

	preview: {
		select: {
			title: 'title',
			author: 'author.name',
			media: 'thumbnail',
		},
		prepare(selection) {
			const { author } = selection;
			return Object.assign({}, selection, {
				subtitle: author && `by ${author}`,
			});
		},
	},
};
