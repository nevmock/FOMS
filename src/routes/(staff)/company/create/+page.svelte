<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { z } from 'zod';
	import toast, { Toaster } from 'svelte-french-toast';
	import request from '../../../../utils/request';
	import { redirect } from '@sveltejs/kit';

	const MAX_FILE_SIZE = 2000;
	const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

	const formSchema = z.object({
		name: z
			.string()
			.min(1, { message: 'Name must be at least 1 characters long' })
			.max(30, { message: 'Name must be at most 30 characters long.' }),
		code: z.string().min(1, { message: 'Code must be filled in' }),
		address: z.string().min(1, { message: 'Address must be filled in' }),
		logoUri: z
			.any()
			.refine(
				(file) => file?.size <= MAX_FILE_SIZE,
				`The maximum file size that can be uploaded is 2MB`
			)
			.refine(
				(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
				'Only .jpg, .jpeg, .png and .webp formats are supported.'
			)
	});

	let companyName: string = '';
	let companyCode: string = '';
	let companyAddress: string = '';
	let companyLogo: File | string;
	let previewUrl: string = '';

	let validations: [];
	let isLoading: boolean = false;

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

	const HandleCreateCompany = async (e: Event) => {
		e.preventDefault();
		validations = [];
		isLoading = true;
		toast.loading('Saving data...');

		const validation = formSchema.safeParse({
			name: companyName,
			code: companyCode,
			address: companyAddress,
			logoUri: companyLogo
		});

		console.log(validation);

		if (validation.success) {
			validation.error.errors.map((validation) => {
				const key = [
					{
						name: validation.path[0],
						message: validation.message
					}
				];
				(validations: any) => [...validations, ...key];
			});
			isLoading = false;
			toast.dismiss();
			toast.error('Invalid Input.');

			return;
		}

		let data: { name: string; code: string; address: string; logo_uri: File | string } = {
			name: companyName,
			code: companyCode,
			address: companyAddress,
			logo_uri: companyLogo
		};

		await request
			.post('/v1/company', data)
			.then(function (response) {
				if (response.data?.code === 200 || response.data?.code === 201) {
					toast.dismiss();
					toast.success('Success Add Blog');
					redirect(302, '/company');
				}
				isLoading = false;
			})
			.catch(function (error) {
				if (
					(error.response?.data?.code === 400 || error.response?.data?.code === 422) &&
					error.response?.data.status == 'VALIDATION_ERROR'
				) {
					validations = error.response?.data.error?.validation;
					toast.dismiss();
					toast.error(error.response?.data.error?.message);
					companyLogo = '';
				} else if (
					error.response?.data?.code === 404 &&
					error.response?.data.status == 'NOT_FOUND'
				) {
					toast.dismiss();
					toast.error(error.response?.data.error?.message);
				} else if (error.response?.data?.code === 500) {
					toast.dismiss();
					toast.error(error.response?.data.error.message);
				}
				isLoading = false;
			});
	};

	onMount(() => {
		return () => {
			if (previewUrl) {
				URL.revokeObjectURL(previewUrl);
			}
		};
	});

	$: console.log(validations);
</script>

<Toaster />
<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Create Company</h1>
</div>
<div class="h-7"></div>
<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">Company Profile</h2>
		<p class="text-sm text-gray-400">Put the Company Profile details in</p>
	</div>
	<form class="p-4" on:submit={HandleCreateCompany}>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<label for="company_name" class="block mb-2 text-sm font-medium text-gray-900"
					>Company name <span class="text-red-500">*</span></label
				>
				<input
					type="text"
					id="company_name"
					name="companyName"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
						class="flex flex-col items-center justify-center w-full h-32 border-[1.5px] border-gray-300 rounded-lg cursor-pointer bg-gray-50"
						on:drop={handleDrop}
						on:dragover={handleDragOver}
					>
						{#if previewUrl}
							<div>
								<img
									src={previewUrl}
									alt="Preview"
									class=" object-contain w-[100px] h-[100px]"
								/>
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
			>Create</button
		>
	</form>
</div>
