<script lang="ts">
	import Select from 'svelte-select';
	export let id: string = '';
	export let name: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let label: string = '';
	export let validations: { name: string | number; message: string }[] = [];
	export let value: { label: string; value: string } | null = null;
	export let filterText = '';
	export let options: Array<{ value: string; label: string; created?: boolean }> = [];
	export let allowAddNew: boolean = false;

	// Memantau perubahan filterText secara real-time
	$: {
		// Hapus item "Add new" sebelumnya
		options = options.filter((i) => !i.created);

		// Tambahkan opsi "Add new" jika filterText tidak kosong
		if (allowAddNew && filterText.trim()) {
			options = [
				...options,
				{
					value: filterText,
					label: filterText,
					created: true
				}
			];
		}
	}

	function handleChangeOfficerPosition(e: CustomEvent) {
		// Reset opsi "Add new" ketika pilihan berubah
		options = options.filter((i) => !i.created);
	}
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
		<Select
			{required}
			{disabled}
			id="officerPosition"
			name="officerPosition"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
			on:change={handleChangeOfficerPosition}
			bind:filterText
			bind:value
			placeholder="Select an option"
			items={options}
		>
			<div slot="item" let:item>
				{item.created ? 'Add new: ' : ''}
				{item.label}
			</div>
		</Select>

		{#if validations}
			{#each validations as validation}
				{#if validation.name === name}
					<p class="mt-2 text-sm text-red-500">{validation.message}</p>
				{/if}
			{/each}
		{/if}
	</div>
</div>
