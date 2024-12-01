<script lang="ts">
	let query: string = '';
	let selectedItem: { value: string; label: string } | null = null;

	// Opsi yang sudah ada
	const options: { value: string; label: string }[] = [
		{ value: 'apple', label: 'Apple' },
		{ value: 'banana', label: 'Banana' },
		{ value: 'cherry', label: 'Cherry' },
		{ value: 'date', label: 'Date' },
		{ value: 'elderberry', label: 'Elderberry' },
		{ value: 'fig', label: 'Fig' },
		{ value: 'grape', label: 'Grape' }
	];

	let filteredOptions: { value: string; label: string }[] = options;
	let showDropdown: boolean = false;

	// Fungsi untuk filter opsi berdasarkan pencarian
	const filterOptions = (): void => {
		showDropdown = query.length > 0;
		filteredOptions = options.filter((option) =>
			option.label.toLowerCase().includes(query.toLowerCase())
		);
	};

	// Fungsi untuk menangani perubahan input
	const handleInputChange = (event: Event): void => {
		const input = event.target as HTMLInputElement;
		query = input.value;
		filterOptions();
	};

	// Fungsi untuk memilih item dari daftar opsi
	const selectItem = (item: { value: string; label: string }): void => {
		selectedItem = item;
		query = item.label;
		filteredOptions = options; // Reset filter setelah memilih
		showDropdown = false; // Sembunyikan dropdown setelah memilih item
	};

	// Fungsi untuk menangani input yang tidak ada di opsi
	const handleBlur = (): void => {
		// Jika query tidak cocok dengan opsi yang ada, simpan input sebagai value
		if (!filteredOptions.some((option) => option.label.toLowerCase() === query.toLowerCase())) {
			selectedItem = { value: query.toLowerCase(), label: query };
		}
	};
</script>

<div class="relative w-64">
	<input
		type="text"
		bind:value={query}
		on:input={handleInputChange}
		on:blur={handleBlur}
		placeholder="Search or select..."
		class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
	/>
	{#if showDropdown && filteredOptions.length > 0}
		<ul
			class="absolute left-0 right-0 mt-1 bg-white border border-gray-300 max-h-40 overflow-y-auto z-10 rounded-md shadow-lg"
		>
			{#each filteredOptions as option}
				<li on:click={() => selectItem(option)} class="p-2 cursor-pointer hover:bg-gray-200">
					{option.label}
				</li>
			{/each}
		</ul>
	{/if}
	{#if selectedItem}
		<div class="mt-2 text-sm text-gray-700">Selected: {selectedItem.value}</div>
	{/if}
</div>
