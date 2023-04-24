<script lang="ts">
	export let data;
	const { Content, title, subtitle, cover_image, date_published, date_updated, description, tags } =
		data;

	const tagsList = tags.split(', ');
</script>

<article
	class="prose-xl prose-neutral prose-ul:list-disc prose-ol:list-decimal prose-img:mx-auto text-white p-3 pt-14 md:pt-16"
>
	<h1 class="font-ubuntu-mono text-center font-bold">{title}</h1>
	<h3 class="font-ubuntu-mono text-center text-neutral-200">{subtitle}</h3>
	<div class="flex flex-col md:flex-row not-prose mt-10 mb-10 md:mt-14">
		<p class="text-center font-ubuntu-mono text-sm">published_on: {date_published}</p>
		<span class="flex-grow" />
		<p class="text-center font-ubuntu-mono text-sm">updated_on: {date_updated}</p>
	</div>

	<div class="flex flex-row space-x-5 flex-wrap justify-center">
		{#each tagsList as tag}
			<span class="bg-green-600 rounded-full px-4 py-1 mt-4 text-sm">
				{tag}
			</span>
		{/each}
	</div>

	{#if cover_image !== ''}
		<img src={cover_image} alt="Cover Image" />
	{/if}
	<div class="flex flex-col line-numbers font-ubuntu-mono mt-20">
		<Content />
	</div>
</article>

<style>
	@import url(../../../../src/styles/prism/theme.css);
	@import url(../../../../src/styles/prism/overflow-fix.css);
</style>
