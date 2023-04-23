<script lang="ts">
	export let pages: string[] = [];
	export let currentPage = '';

	let navMenuShown = true;

	const toggleNavMenu = () => {
		navMenuShown = !navMenuShown;
	};
</script>

<div class="flex w-full flex-col items-center">
	<nav class="flex justify-between" aria-label="Breadcrumb">
		<ol class="mb-3 inline-flex items-center">
			<span class="mx-2 text-2xl text-gray-400">~/</span>

			<li>
				<div class="flex items-center">
					<button
						id="dropdownProject"
						data-dropdown-toggle="dropdown-project"
						class="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-2xl font-normal text-white"
						disabled
					>
						shahankNet
					</button>
				</div>
			</li>

			<span class="mx-2 text-2xl text-gray-400">/</span>

			<li aria-current="page">
				<div class="items-center">
					<button
						id="dropdownDefaultButton"
						data-dropdown-toggle="dropdown"
						class="inline-flex items-center rounded-lg bg-neutral-900 px-4 py-2.5 text-center text-2xl font-medium text-white hover:bg-neutral-700 focus:outline-none"
						type="button"
						on:click={toggleNavMenu}
					>
						{currentPage}
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
							{#each pages as pageName}
								<li>
									<a
										href="/{pageName}"
										class="block px-4 py-2 text-2xl hover:bg-neutral-600 hover:text-white"
									>
										{pageName}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</li>
		</ol>
	</nav>
</div>
