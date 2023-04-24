export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, subtitle, cover_image, date_published, date_updated, description, tags } =
		post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		subtitle,
		cover_image,
		date_published,
		date_updated,
		description,
		tags
	};
}
