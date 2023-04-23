<script lang="ts">
	export let data;
	const { Content, title, date } = data;
</script>

<article
	class="prose-lg prose-neutral prose-ul:list-disc prose-img:mx-auto text-white p-3 pt-16 max-w-none"
>
	<h1 class="text-center">{title}</h1>
	<p class="text-center">Published on: {date}</p>
	<div class="flex flex-col">
		<Content />
	</div>
</article>

<style>
	@import url(../../../../src/styles/prism/gruvbox.css);
	@import url(../../../../src/styles/prism/wordwrap.css);
</style>
