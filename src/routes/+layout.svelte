<script>
	import '../app.css';
	import Navbar from '../components/layout-components/navbar/navbar.svelte';
</script>

<header>
	<Navbar />
</header>

<main class="flex flex-col w-full max-w-3xl mx-auto items-center">
	<slot />
</main>
