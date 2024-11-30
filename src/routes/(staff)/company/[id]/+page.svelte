<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import type { ViewDataParsing } from '$lib/server/types/view';
	import type { Company } from '@prisma/client';
	// import request from '../../../utils/request';
	export let data: ViewDataParsing<Company>;

	console.info(data);
	console.log(data);

	let companyName: string | null = data.response?.name!;
	let companyCode: string | null = data.response?.name!;
	let companyAddress: string | null = data.response?.name!;
	let companyLogo: File | null = null;
	let previewUrl: string | null = data.response?.logo_uri!;
	let isLoading: boolean = true;

	// onMount(async () => {
	// 	// await loadData(); // Menunggu data dimuat
	// });
	isLoading = false; // Menyembunyikan indikator loading setelah data dimuat

	function handleFileSelect(e: Event): void {
		const target = e.target as HTMLInputElement;
		if (target.files && target.files.length > 0) {
			companyLogo = target.files[0];
			previewUrl = URL.createObjectURL(companyLogo);
		}
	}

	function handleDrop(e: DragEvent): void {
		e.preventDefault();
		if (e.dataTransfer?.files && e.dataTransfer.files.length > 0) {
			companyLogo = e.dataTransfer.files[0];
			previewUrl = URL.createObjectURL(companyLogo);
			e.dataTransfer.clearData();
		}
	}

	function handleDragOver(e: DragEvent): void {
		e.preventDefault();
	}

	function cancelImage(): void {
		companyLogo = null;
		previewUrl = null;
	}

	onMount(() => {
		return () => {
			if (previewUrl) {
				URL.revokeObjectURL(previewUrl);
			}
		};
	});
</script>

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Edit Company</h1>
</div>
<div class="h-7"></div>
<div class="border-2 bg-white border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">Company Profile</h2>
		<p class="text-sm text-gray-400">Put the Company Profile details in</p>
	</div>
	{#if isLoading}
		<div class="flex justify-center items-center py-10">
			<svg
				class="animate-spin h-8 w-8 text-blue-700"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
				></path>
			</svg>
			<span class="ml-2 text-gray-700">Loading...</span>
		</div>
	{:else if data && data?.response}
		<form class="p-4">
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label for="company_name" class="block mb-2 text-sm font-medium text-gray-900"
						>Company name <span class="text-red-500">*</span></label
					>
					<input
						type="text"
						id="company_name"
						name="companyName"
						class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Company Name "
						bind:value={companyName}
						required
					/>
				</div>
				<div>
					<label for="company_code" class="block mb-2 text-sm font-medium text-gray-900"
						>Company code<span class="text-red-500">*</span></label
					>
					<input
						type="text"
						id="company_code"
						name="companyCode"
						class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Compoany Code"
						bind:value={companyCode}
						required
					/>
				</div>
				<div>
					<label for="company_address" class="block mb-2 text-sm font-medium text-gray-900"
						>Company address<span class="text-red-500">*</span></label
					>
					<input
						type="text"
						id="company_address"
						name="companyAddress"
						class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder="Company Address"
						bind:value={companyAddress}
						required
					/>
				</div>
				<div>
					<label for="company_logo" class="block mb-2 text-sm font-medium text-gray-900"
						>Company logo<span class="text-red-500">*</span></label
					>
					<div class="flex items-center justify-center w-full">
						<label
							for="company_logo"
							class="flex flex-col items-center justify-center w-full h-32 border-[1.5px] border-gray-300 rounded-lg cursor-pointer bg-white"
							on:drop={handleDrop}
							on:dragover={handleDragOver}
						>
							{#if previewUrl}
								<div class="relative">
									<img
										src={previewUrl}
										alt="Preview"
										class=" object-contain w-[100px] h-[100px]"
									/>
									<button
										type="button"
										on:click={cancelImage}
										class="text-red-700 bg-white border-2 border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-5 h-5 flex justify-center items-center absolute -top-1 -right-1"
									>
										x
									</button>
								</div>
							{:else}
								<div class="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										class="w-8 h-8 mb-4 text-gray-500"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p class="mb-2 text-sm text-gray-500">
										<span class="font-semibold">Click to upload</span> or drag and drop
									</p>
									<p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (Ratio 1:1)</p>
								</div>
								<input
									id="company_logo"
									name="companyLogo"
									type="file"
									accept="image/*"
									class="hidden"
									on:change={handleFileSelect}
								/>
							{/if}
						</label>
					</div>
				</div>
			</div>

			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
				>Edit</button
			>
		</form>
	{/if}
</div>
