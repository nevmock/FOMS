<script lang="ts">
	export let type: string = 'text';
	export let id: string = '';
	export let name: string = '';
	export let value: string = '';
	export let placeholder: string = '';
	export let disabled: boolean = false;
	export let previewImage: string = '';
	export let multiple: boolean = false;
	export let required: boolean = false;
	export let label: string = '';
	export let validations: { name: string | number; message: string }[];
	export let onChange: ((event: Event) => void) | null = null;

	const handleInput = (event: Event) => {
		const target = event.currentTarget as HTMLInputElement;
		if (onChange) {
			onChange(event);
		}
	};
</script>

<div class="w-full">
	{#if label}
		<div class="flex justify-between">
			<label for={id} class="block mb-2 text-sm font-medium text-gray-900">
				{label}{#if required}<span class="text-red-500">*</span>{/if}
			</label>
			{#if previewImage}
				<a
					href={previewImage}
					target="_blank"
					rel="noopener noreferrer"
					class="block mb-2 mr-4 text-sm font-medium text-gray-900"
				>
					Preview Image
				</a>
			{/if}
		</div>
	{/if}

	<div class="relative w-full">
		<input
			{id}
			{name}
			{type}
			{value}
			{placeholder}
			{required}
			{disabled}
			{multiple}
			on:input={handleInput}
			accept="image/*"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
		/>

		{#if validations}
			{#each validations as validation}
				{#if validation.name === name}
					<p class="mt-2 text-sm text-red-500">{validation.message}</p>
				{/if}
			{/each}
		{/if}
	</div>
</div>
