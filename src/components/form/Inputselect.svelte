<script lang="ts">
	export let required: boolean = false;
	export let label: string = '';
	export let placeholder: string = '';
	export let id: string = '';
	export let name: string = '';
	export let options: { value: string; label: string }[] = [];
	export let query: string = '';
	export let selectedItem: { value: string; label: string } | null = null;
	export let allowCustomInput: boolean = false;
	export let validations: { name: string | number; message: string }[] = [];
	export let fetchData: (search: string) => Promise<void> = async () => {}; // Fungsi default kosong

	let filteredOptions: { value: string; label: string }[] = options;
	let showDropdown: boolean = false;

	const filterOptions = (): void => {
		showDropdown = query.length > 0;
		filteredOptions = options.filter((option) =>
			option.label.toLocaleLowerCase().includes(query.toLocaleLowerCase())
		);
	};

	const handleInputChange = async (event: Event): Promise<void> => {
		const input = event.target as HTMLInputElement;
		query = input.value;

		// Panggil fetchData jika ada perubahan query
		if (query.length > 2 && fetchData) {
			await fetchData(query); // Memperbarui options melalui fetch
		}

		filterOptions(); // Filter opsi yang diperbarui
	};

	const selectItem = (item: { value: string; label: string }): void => {
		selectedItem = item;
		query = item.label;
		filteredOptions = options;
		showDropdown = false;
	};

	const handleBlur = (): void => {
		if (!allowCustomInput && !filteredOptions.some((option) => option.label === query)) {
			query = '';
			selectedItem = null;
		} else if (allowCustomInput && !filteredOptions.some((option) => option.label === query)) {
			selectedItem = { value: query, label: query };
		}
	};
</script>

<div class="w-full">
	{#if label}
		<div class="flex justify-between">
			<label for={id} class="block mb-2 text-sm font-medium text-gray-900">
				{label}{#if required}<span class="text-red-500">*</span>{/if}
			</label>
		</div>
	{/if}
	<div class="relative w-full">
		<input
			type="text"
			{required}
			bind:value={query}
			on:input={handleInputChange}
			on:blur={handleBlur}
			{placeholder}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
		{#if validations}
			{#each validations as validation}
				{#if validation.name === name}
					<p class="mt-2 text-sm text-red-500">{validation.message}</p>
				{/if}
			{/each}
		{/if}
	</div>
</div>
