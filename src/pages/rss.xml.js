import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { title as SITE_TITLE, description as SITE_DESCRIPTION } from '../config/site.json';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
	});
}
