<script lang="ts">
	import Select from 'svelte-select';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import type { ViewDataParsing } from '$lib/server/types/view';
	import type { Company } from '@prisma/client';
	import request from '../../../../utils/request';
	export let data: ViewDataParsing<Array<Company>>;
	import { writable } from 'svelte/store';
	import Inputselect from '../../../../components/form/Inputselect.svelte';

	const dispatch = createEventDispatcher();

	let company: { label: string; value: number } | null = null;
	let levelPosition: { label: string; value: number } | null = null;
	let officerPosition: { label: string; value: number } | null = null;
	let basicSalary: number | null = null;
	let formatBasicSalary: string | null = null;

	let loading: boolean = false;
	let validations: { name: string | number; message: string }[] = [];
	let formDataPosition: {
		companyId: string;
		levelId: string;
		officerId: string;
		basicSalary: number;
	} = {
		companyId: '',
		levelId: '',
		officerId: '',
		basicSalary: 0
	};

	let companies: Array<{ value: string; label: string }> = [];
	const filterTextCompany = writable('');
	onMount(() => {
		filterTextCompany.subscribe(async (value) => {
			if (value) {
				await fetchCompanies(value);
			}
		});
	});

	const fetchCompanies = async (search: string) => {
		loading = true; // Start loading indicator
		const payload = {
			start: 1,
			length: 15,
			search: search, // Use the search parameter
			order: 'desc'
		};

		try {
			const response = await request.get('/company', payload);
			companies = response?.data?.data.map((company: any) => ({
				value: company.id,
				label: company.name
			}));
		} catch (error) {
			console.error('Error fetching companies:', error);
		} finally {
			loading = false; // Stop loading indicator
		}
	};

	const unsubscribe = filterTextCompany.subscribe((value) => {
		if (value.trim() !== '') {
			fetchCompanies(value); // Fetch companies when filter text changes
		} else {
			companies = []; // Clear companies if filter is empty
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	const handleInputChangePosition = (event: CustomEvent, name: string) => {
		const { value } = event.detail; // Get the name and value from event detail
		formDataPosition = {
			...formDataPosition,
			[name]: value
		};
	};

	let filterTextLevelPosition = '';
	let filterTextOfficerPosition = '';

	companies =
		data?.response?.map((company) => ({
			value: company.id,
			label: company.name
		})) ?? [];

	console.log(companies);
	let listLevelPositions: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 1, label: 'Level 1' }
	];
	let listOfficerPositions: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 1, label: 'Officer 1' }
	];

	function handleFilterLevelPosition(e: CustomEvent) {
		if (levelPosition?.label === filterTextLevelPosition) return;
		if (e.detail.length === 0 && filterTextLevelPosition.length > 0) {
			const prev = listLevelPositions.filter((i) => !i.created);
			listLevelPositions = [
				...prev,
				{ value: filterTextLevelPosition, label: filterTextLevelPosition, created: true }
			];
		}
	}

	function handleChangeLevelPosition(e: CustomEvent) {
		listLevelPositions = listLevelPositions.filter((i) => !i.created);
	}

	function handleFilterOfficerPosition(e: CustomEvent) {
		if (officerPosition?.label === filterTextOfficerPosition) return;
		if (e.detail.length === 0 && filterTextOfficerPosition.length > 0) {
			const prev = listOfficerPositions.filter((i) => !i.created);
			listOfficerPositions = [
				...prev,
				{ value: filterTextOfficerPosition, label: filterTextOfficerPosition, created: true }
			];
		}
	}

	function handleChangeOfficerPosition(e: CustomEvent) {
		listOfficerPositions = listOfficerPositions.filter((i) => !i.created);
	}

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		let value = input.value.replace(/[^\d]/g, ''); // Remove all non-digit characters

		basicSalary = parseInt(value || '0', 10);
		formatBasicSalary = basicSalary ? `${basicSalary.toLocaleString('id-ID')}` : '';
	}

	console.log(formDataPosition);
	console.log(companies);
</script>

<p>{$filterTextCompany}</p>
<Inputselect />
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
	<form class="p-4">
		<div class="grid gap-6 mb-6 md:grid-cols-2">
			<div>
				<label for="company" class="block mb-2 text-sm font-medium text-gray-900"
					>Company<span class="text-red-500">*</span></label
				>
				<Select
					id="company"
					name="company"
					items={companies}
					placeholder="Select an option"
					class="foo bar"
					bind:value={formDataPosition.companyId}
					on:change={(event) => handleInputChangePosition(event, 'companyId')}
					bind:filterText={$filterTextCompany}
				/>
			</div>
			<div>
				<label for="levelPosition" class="block mb-2 text-sm font-medium text-gray-900"
					>Level position<span class="text-red-500">*</span></label
				>
				<Select
					id="levelPosition"
					name="levelPosition"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					on:change={handleChangeLevelPosition}
					on:filter={handleFilterLevelPosition}
					bind:filterText={filterTextLevelPosition}
					bind:value={levelPosition}
					placeholder="Select an option"
					items={listLevelPositions}
				>
					<div slot="item" let:item>
						{item.created ? 'Add new: ' : ''}
						{item.label}
					</div>
				</Select>
			</div>
			<div>
				<label for="officerPosition" class="block mb-2 text-sm font-medium text-gray-900"
					>Officer position<span class="text-red-500">*</span></label
				>
				<Select
					id="officerPosition"
					name="officerPosition"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					on:change={handleChangeOfficerPosition}
					on:filter={handleFilterOfficerPosition}
					bind:filterText={filterTextOfficerPosition}
					bind:value={officerPosition}
					placeholder="Select an option"
					items={listOfficerPositions}
				>
					<div slot="item" let:item>
						{item.created ? 'Add new: ' : ''}
						{item.label}
					</div>
				</Select>
			</div>
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
			class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
		>
			Create
		</button>
	</form>
</div>
