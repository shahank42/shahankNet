<script lang="ts">
	import { page } from '$app/stores';

	export let pages: string[] = [];

	let navMenuShown = true;

	const toggleNavMenu = () => {
		navMenuShown = !navMenuShown;
	};

	let pagesToShow: string[];
	let blogPages: string[];
	let secondComponent: string | undefined;
	let thirdComponent: string | undefined;

	$: {
		let urlComponents = $page.url.pathname.split('/').splice(1);
		secondComponent = urlComponents[0];
		thirdComponent = urlComponents[1];
		pagesToShow = pages;
		blogPages = ['0x00', '0x01', '0x02'];
	}
</script>

<div class="flex w-full flex-col items-center">
	<nav class="flex justify-between" aria-label="Breadcrumb">
		<ol class="mb-3 flex items-center flex-wrap justify-center">
			<span class="font-ubuntu-mono mx-2 text-2xl text-gray-400">~/</span>

			<li>
				<div class="flex items-center">
					<a href="/">
						<button
							id="dropdownProject"
							data-dropdown-toggle="dropdown-project"
							class="mt-3 font-ubuntu-mono inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-xl md:text-2xl font-normal text-white"
						>
							shahankNet
						</button>
					</a>
				</div>
			</li>

			<span class="font-ubuntu-mono mx-2 text-2xl text-gray-400">/</span>

			{#if thirdComponent}
				<li>
					<div class="flex items-center mt-3">
						<a href={`../${secondComponent}`}>
							<button
								id="dropdownProject"
								data-dropdown-toggle="dropdown-project"
								class="font-ubuntu-mono inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-xl md:text-2xl font-normal text-white"
							>
								{secondComponent}
							</button>
						</a>
					</div>
				</li>

				<span class="font-ubuntu-mono mx-2 text-2xl text-gray-400">/</span>

				{#if secondComponent == 'blog'}
					<li aria-current="page">
						<div class="items-center mt-3">
							<button
								id="dropdownDefaultButton"
								data-dropdown-toggle="dropdown"
								class="font-ubuntu-mono inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-xl md:text-2xl font-medium text-white hover:bg-neutral-700 focus:outline-none"
								type="button"
								on:click={toggleNavMenu}
							>
								{thirdComponent}
								<svg
									class="ml-2 h-4 w-4"
									aria-hidden="true"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</button>

							<div
								id="dropdown"
								class="fixed z-10 mt-2 {navMenuShown &&
									'hidden'} divide-y divide-gray-100 rounded-lg bg-neutral-700 shadow"
							>
								<ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
									{#each blogPages as pageName}
										<li>
											<a
												target="_self"
												href={pageName}
												class="font-ubuntu-mono block px-4 py-2 text-xl md:text-2xl {pageName ==
												thirdComponent
													? 'bg-blue-700'
													: ' hover:bg-neutral-600 hover:text-white'}"
											>
												{pageName}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						</div>
					</li>
				{/if}
			{:else}
				<li aria-current="page">
					<div class="items-center mt-3">
						<button
							id="dropdownDefaultButton"
							data-dropdown-toggle="dropdown"
							class="font-ubuntu-mono inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-xl md:text-2xl font-medium text-white hover:bg-neutral-700 focus:outline-none"
							type="button"
							on:click={toggleNavMenu}
						>
							{secondComponent}
							<svg
								class="ml-2 h-4 w-4"
								aria-hidden="true"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						<div
							id="dropdown"
							class="fixed z-10 mt-2 {navMenuShown &&
								'hidden'} divide-y divide-gray-100 rounded-lg bg-neutral-700 shadow"
						>
							<ul class="py-2 text-sm text-gray-200" aria-labelledby="dropdownDefaultButton">
								{#each pagesToShow as pageName}
									<li>
										<a
											href="/{pageName}"
											class="font-ubuntu-mono block px-4 py-2 text-xl md:text-2xl {pageName ==
											secondComponent
												? 'bg-blue-700'
												: ' hover:bg-neutral-600 hover:text-white'} "
										>
											{pageName}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
				</li>
			{/if}
		</ol>
	</nav>
</div>
