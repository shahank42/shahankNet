<script lang="ts">
	export let data;
	const { Content, title, date } = data;
</script>

<article
	class="prose-lg md:prose-xl prose-neutral prose-ul:list-disc prose-img:mx-auto text-white p-4 pt-16 max-w-none"
>
	<h1 class="font-ubuntu-mono text-center font-bold">{title}</h1>
	<p class="text-center font-ubuntu-mono">Published on: {date}</p>
	<div class="flex flex-col line-numbers font-ubuntu-mono mt-20">
		<Content />
	</div>
</article>

<style>
	@import url(../../../../src/styles/prism/theme.css);
	@import url(../../../../src/styles/prism/overflow-fix.css);
</style>
