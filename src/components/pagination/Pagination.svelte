<script lang="ts">
	// Props with type annotations
	export let recordsTotal: number = 0;
	export let limit: number;
	export let page: number;

	// Calculate total pages
	const totalPages: number = Math.ceil(recordsTotal / limit);

	// Reactive variables for start and end items based on the current page
	let startItem: number;
	let endItem: number;

	// Reactive calculation for the range of items
	$: {
		startItem = (page - 1) * limit + 1;
		endItem = Math.min(page * limit, recordsTotal);
	}

	// Handle previous button click
	const handlePrev = (): void => {
		if (page > 1) {
			page -= 1; // Update the current page
		}
		location.assign(`?start=${page}&length=${limit}`);
	};

	// Handle next button click
	const handleNext = (): void => {
		if (page < totalPages) {
			page += 1; // Update the current page
		}
		location.assign(`?start=${page}&length=${limit}`);
	};

	// Get page numbers to display
	const getPageNumbers = (): (number | string)[] => {
		const pages: (number | string)[] = [];

		if (totalPages <= 5) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			if (page < 4) {
				pages.push(1, 2, 3);
			} else {
				pages.push(1);
			}

			if (page > 3) {
				pages.push('...');
			}

			if (page > 3 && page < totalPages - 2) {
				pages.push(page - 1, page, page + 1);
			} else if (page >= totalPages - 2) {
				pages.push(totalPages - 2, totalPages - 1);
			}

			if (page < totalPages - 2) {
				pages.push('...');
			}

			pages.push(totalPages);
		}

		return pages;
	};
</script>

{#if totalPages > 1}
	<nav class="flex items-center justify-between pt-4" aria-label="Pagination">
		<span class="text-sm font-normal text-gray-500">
			Showing <span class="font-semibold text-gray-900">{startItem}-{endItem}</span> of
			<span class="font-semibold text-gray-900">{recordsTotal}</span>
		</span>
		<ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
			<li>
				<button
					on:click={handlePrev}
					class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
					aria-label="Previous"
					disabled={page === 1}
				>
					Previous
				</button>
			</li>

			{#each getPageNumbers() as pageNumber}
				<li>
					<button
						on:click={() =>
							typeof pageNumber === 'number' &&
							(page = pageNumber) &&
							location.assign(`?start=${page}&length=${limit}`)}
						class="flex items-center justify-center px-3 h-8 leading-tight {pageNumber ===
						page
							? 'text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700'
							: 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700'}"
						disabled={pageNumber === '...'}
					>
						{pageNumber}
					</button>
				</li>
			{/each}

			<li>
				<button
					on:click={handleNext}
					class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
					aria-label="Next"
					disabled={page === totalPages}
				>
					Next
				</button>
			</li>
		</ul>
	</nav>
{/if}
