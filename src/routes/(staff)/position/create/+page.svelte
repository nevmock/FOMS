<script lang="ts">
	import Select from 'svelte-select';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import type { ViewDataParsing } from '$lib/server/types/view';
	import type { Company } from '@prisma/client';
	import request from '../../../../utils/request';
	import InputSelect2 from '../../../../components/form/InputSelect2.svelte';
	export let data: ViewDataParsing<Array<Company>>;
	import { z } from 'zod';
	import toast, { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';

	const formSchema = z.object({
		companyId: z.string().min(1, { message: 'Company is required' }), // Pastikan companyId adalah string dan tidak kosong
		levelId: z.string().min(1, { message: 'Level position is required' }), // Pastikan levelId adalah string dan tidak kosong
		officerId: z.string().min(1, { message: 'Officer position is required' }), // Pastikan officerId adalah string dan tidak kosong
		basicSalary: z
			.number()
			.positive('Basic Salary must be greater than 0') // Pastikan basicSalary adalah angka positif
			.min(1, 'Basic Salary must be at least 1') // Minimal nilai adalah 1
	});

	let loading: boolean = false;
	let validations: { name: string | number; message: string }[] = [];

	// Company
	let company: { label: string; value: string } | null = null;
	$: console.log('comapny : ', company);
	let filterTextCompany: string = '';
	let companyList: Array<{ value: string; label: string; created?: boolean }> =
		data?.response?.map((company) => ({
			value: company.id,
			label: company.name
		})) ?? [];
	// Level position
	let levelPosition: { label: string; value: string } | null = null;
	$: console.log('level : ', levelPosition);
	let filterTextLevelPosition: string = '';
	let levelPositionList: Array<{ value: string; label: string; created?: boolean }> = [
		{ value: 'asd', label: 'Manager' },
		{ value: 'asd', label: 'Staff' }
	];
	// Officer position
	let officerPosition: { label: string; value: string } | null = null;
	$: console.log('officer : ', officerPosition);
	let filterTextOfficerPosition: string = '';
	let officerPositionList: Array<{ value: string; label: string; created?: boolean }> = [];
	// Basic salry
	let basicSalary: number | null = null;
	let formatBasicSalary: string | null = null;

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		let value = input.value.replace(/[^\d]/g, ''); // Remove all non-digit characters

		basicSalary = parseInt(value || '0', 10);
		formatBasicSalary = basicSalary ? `${basicSalary.toLocaleString('id-ID')}` : '';
	}

	const fetchCompanies = async (search: string = '', id: string = '') => {
		loading = true; // Start loading indicator
		const payload = {
			id: id,
			start: 1,
			length: 15,
			search: search, // Use the search parameter
			order: 'desc'
		};

		try {
			const response = await request.get('/company', payload);
			companyList = response?.data?.data.map((company: any) => ({
				value: company.id,
				label: company.name
			}));
		} catch (error) {
			console.error('Error fetching companies:', error);
		} finally {
			loading = false; // Stop loading indicator
		}
	};

	const onSubmit = async (e: Event) => {
		e.preventDefault();
		loading = true;
		toast.loading('Saving data...');

		try {
			let validation = formSchema.safeParse({
				companyId: company?.value,
				levelId: levelPosition?.value,
				officerId: officerPosition?.value,
				basicSalary: basicSalary
			});

			if (!validation.success) {
				validations = validation.error.errors.map((error) => ({
					name: error.path[0],
					message: error.message
				}));
				toast.dismiss();
				toast.error('Invalid Input');
				loading = false;
				return;
			}
		} catch (error: any) {
			toast.dismiss();
			toast.error(error.message);
			loading = false;
			return;
		}

		const data = {
			companyId: company?.value,
			levelId: levelPosition?.value,
			officerId: officerPosition?.value,
			basicSalary: basicSalary
		};

		request
			.post(`/position`, data)
			.then((response) => {
				if (!response || !response.data) {
					toast.dismiss();
					toast.error('No response data received');
					loading = false;
					return;
				}

				const { code, status, data, error } = response.data;

				if (code === 200 || code === 201) {
					toast.dismiss();
					toast.success(data?.message);
					goto('/position');
				} else {
					const formattedStatus = status
						? status
								.split('_')
								.map((word: string) => word[0].toUpperCase() + word.slice(1).toLowerCase())
								.join(' ')
						: 'Error';

					if (code === 400 && status === 'VALIDATION_ERROR') {
						validations = error?.validation;
					}
					toast.dismiss();
					toast.error(`${formattedStatus}: ${error?.message || 'An error occurred'}`);
				}
				loading = false;
			})
			.catch((error) => {
				toast.dismiss();
				toast.error(error?.message || 'An error occurred');
				loading = false;
			});
	};

	const onSubmitLevel = async (e: any, name: string) => {
		e.preventDefault();
		loading = true;

		let data: { name: string } = {
			name: name
		};

		await request
			.post(`/level`, data)
			.then((response) => {
				if (!response || !response.data) {
					loading = false;
					return;
				}

				const { code, status, data, error } = response.data;

				if (code === 200 || code === 201) {
					levelPosition =
						levelPosition != null
							? {
									...levelPosition,
									value: `${response?.data?.data?.id}`
								}
							: null;
				}

				if (code === 400 && status === 'VALIDATION_ERROR') {
					validations = error?.validation;
				}
				loading = false;
			})
			.catch((error) => {
				loading = false;
			});
	};

	const onSubmitOfficer = async (e: any, name: string) => {
		e.preventDefault();
		loading = true;

		let data: { name: string } = {
			name: name
		};

		await request
			.post(`/officer`, data)
			.then((response) => {
				if (!response || !response.data) {
					loading = false;
					return;
				}

				const { code, status, data, error } = response.data;

				if (code === 200 || code === 201) {
					officerPosition =
						officerPosition != null
							? {
									...officerPosition,
									value: `${data?.id}`
								}
							: null;
				}

				if (code === 400 && status === 'VALIDATION_ERROR') {
					validations = error?.validation;
				}
				loading = false;
			})
			.catch((error) => {
				loading = false;
			});
	};
	$: {
		if (levelPosition?.value === levelPosition?.label) {
			onSubmitLevel(new Event('submit'), `${levelPosition?.value}`); // Tambahkan argumen `new Event('submit')` dan `name`
			console.log('levelid : ', levelPosition?.value);
		}
	}
	$: {
		if (officerPosition?.value === officerPosition?.label) {
			onSubmitOfficer(new Event('submit'), `${officerPosition?.value}`); // Tambahkan argumen `new Event('submit')` dan `name`
			console.log('officerId : ', officerPosition?.value);
		}
	}

	$: {
		fetchCompanies(filterTextCompany); // Memanggil fungsi fetch setiap filterText berubah
	}
</script>

<Toaster />

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Create Position</h1>
</div>

<div class="h-7"></div>

<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">Position Profile</h2>
		<p class="text-sm text-gray-400">Put the Position Profile details in</p>
	</div>
	<form class="p-4" on:submit={onSubmit}>
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<InputSelect2
				label={'Company'}
				id={'companyId'}
				name={'companyId'}
				bind:value={company}
				required={true}
				disabled={false}
				bind:filterText={filterTextCompany}
				options={companyList}
				{validations}
			/>
			<InputSelect2
				label={'Level position'}
				id={'levelId'}
				name={'levelId'}
				bind:value={levelPosition}
				required={true}
				allowAddNew={true}
				bind:filterText={filterTextLevelPosition}
				options={levelPositionList}
				{validations}
			/>
			<InputSelect2
				label={'Officer position'}
				id={'officerId'}
				name={'officerId'}
				bind:value={officerPosition}
				required={true}
				allowAddNew={true}
				bind:filterText={filterTextOfficerPosition}
				options={officerPositionList}
				{validations}
			/>
			<div>
				<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
					>Basic Salary<span class="text-red-500">*</span></label
				>
				<div class="relative">
					<div
						class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
					>
						<h1 class="text-gray-500">Rp</h1>
					</div>
					<input
						type="text"
						id="basicSalary"
						name="basicSalary"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
						bind:value={formatBasicSalary}
						on:input={handleInput}
						placeholder="0"
						required
					/>
				</div>
			</div>
		</div>
		<button
			type="submit"
			disabled={loading}
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
		>
			{#if loading}
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
