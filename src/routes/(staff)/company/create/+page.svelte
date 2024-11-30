<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import request from '../../../../utils/request';
	import { z } from 'zod';
	import type { ViewDataParsing } from '$lib/server/types/view';
	import type { Company } from '@prisma/client';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	import InputField from '../../../../components/form/InputField.svelte';
	export let data: ViewDataParsing<Company>;

	const MAX_FILE_SIZE: number = 2000000;
	const ACCEPTED_IMAGE_TYPES: Array<string> = [
		'image/jpeg',
		'image/jpg',
		'image/png',
		'image/webp'
	];

	const formSchema = z.object({
		name: z
			.string()
			.min(3, { message: 'Name must be at least 3 characters long' })
			.max(30, { message: 'Name must be at most 30 characters long' }),
		code: z
			.string()
			.min(3, { message: 'Code must be at least 3 characters long' })
			.max(30, { message: 'Code must be at most 5 characters long' }),
		logoUri: z
			.any()
			.refine(
				(file) => file?.size <= MAX_FILE_SIZE,
				`The maximum file size that can be uploaded is 2MB`
			)
			.refine(
				(file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
				'Only .jpg, .jpeg, .png and .webp formats are supported'
			),
		address: z
			.string()
			.min(3, { message: 'Description must be at least 3 characters long' })
			.max(255, { message: 'Description must be at most 255 characters long' })
	});
	let previewUrl: string | null = data.response?.logo_uri!;
	let isLoading: boolean = false;
	let validations: { name: string | number; message: string }[] = [];
	let formData: {
		name: string;
		code: string;
		address: string;
		logoUri: File | null;
	} = {
		name: '',
		code: '',
		address: '',
		logoUri: null
	};

	const onSubmit = async (e: any) => {
		e.preventDefault();
		isLoading = true;
		toast.loading('Saving data...');

		try {
			let validation = formSchema.safeParse({
				name: formData.name,
				logoUri: formData.logoUri,
				address: formData.address,
				code: formData.code
			});

			if (!validation.success) {
				validations = validation.error.errors.map((error) => ({
					name: error.path[0],
					message: error.message
				}));
				toast.dismiss();
				toast.error('Invalid Input');
				isLoading = false;
				return;
			}
		} catch (error: any) {
			toast.dismiss();
			toast.error(error.message);
			isLoading = false;
			return;
		}

		let data: any = new FormData();
		data.append('name', formData.name);
		data.append('code', formData.code);
		data.append('address', formData.address);
		if (formData.logoUri) {
			data.append('logoUri', formData.logoUri);
		}

		request
			.post(`/company`, data)
			.then((response) => {
				if (!response || !response.data) {
					toast.dismiss();
					toast.error('No response data received');
					isLoading = false;
					return;
				}

				const { code, status, data, error } = response.data;

				if (code === 200 || code === 201) {
					toast.dismiss();
					toast.success(data?.message);
					goto('/company');
				} else {
					const formattedStatus = status
						? status
								.split('_')
								.map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
								.join(' ')
						: 'Error';

					if (code === 400 && status === 'VALIDATION_ERROR') {
						validations = error?.validation;
						formData.logoUri = null;
					}
					toast.dismiss();
					toast.error(`${formattedStatus}: ${error?.message || 'An error occurred'}`);
				}
				isLoading = false;
			})
			.catch((error) => {
				toast.dismiss();
				toast.error(error?.message || 'An error occurred');
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

	const handleInputChange = (event: Event) => {
		const target = event.currentTarget as HTMLInputElement;

		const { name, value, type, files } = target;

		if (type === 'file') {
			const file = files ? files[0] : null;
			formData = {
				...formData,
				[name]: file
			};
		} else {
			formData = {
				...formData,
				[name]: value
			};
		}
	};
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
	<form class="p-4">
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<InputField
				label={'Company code'}
				type="text"
				id="name"
				name="name"
				placeholder="Enter your company name"
				required
				bind:value={formData.name}
				onChange={handleInputChange}
				{validations}
			/>
			<InputField
				label={'Company code'}
				type="text"
				id="code"
				name="code"
				placeholder="Enter your company code"
				required
				bind:value={formData.code}
				onChange={handleInputChange}
				{validations}
			/>
			<InputField
				label={'Company address'}
				type="text"
				id="address"
				name="address"
				placeholder="Enter your company address"
				required
				bind:value={formData.address}
				onChange={handleInputChange}
				{validations}
			/>
			<InputField
				label={'Company logo'}
				type="file"
				id="logoUri"
				name="logoUri"
				placeholder="Enter your company logo"
				required
				onChange={handleInputChange}
				{validations}
			/>
		</div>

		<button
			type="button"
			on:click={onSubmit}
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
			disabled={isLoading}
		>
			{#if isLoading}
				<!-- Loading spinner animation -->
				<svg
					class="w-5 h-5 mr-3 animate-spin"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					stroke-width="2"
				>
					<circle
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-opacity="0.25"
						stroke-width="4"
					></circle>
					<path fill="currentColor" d="M4 12a8 8 0 0116 0"></path>
				</svg>
			{:else}
				Create
			{/if}
		</button>
	</form>
</div>
