<script>
	import BreadcrumbNav from './breadcrumb-nav.svelte';

	let mobileMenuShown = false;

	const toggleMobileMenu = () => {
		mobileMenuShown = !mobileMenuShown;
	};
</script>

<div class="left-0 top-0 z-20 flex-1 w-full bg-neutral-800 pr-6 pt-16 md:pt-20 pb-3 md:pb-5">
	<BreadcrumbNav pages={['blog', 'portfolio', 'projects']} />
</div>
