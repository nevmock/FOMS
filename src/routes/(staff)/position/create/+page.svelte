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
	import { compile } from 'svelte/compiler';
	import InputSelect from '../../../../components/form/Inputselect.svelte';

	const dispatch = createEventDispatcher();

	let selectedItemCompany: { value: string; label: string } | null = null;
	let queryCompany = '';
	let companies: Array<{ value: string; label: string }> = [];
	let selectedItemLevel: { value: string; label: string } | null = null;
	let queryLevel = '';
	let levels: Array<{ value: string; label: string }> = [];
	let selectedItemOfficer: { value: string; label: string } | null = null;
	let queryOfficer = '';
	let officers: Array<{ value: string; label: string }> = [];

	let basicSalary: number | null = null;
	let formatBasicSalary: string | null = null;

	let loading: boolean = false;
	let validations: { name: string | number; message: string }[] = [];

	const filterTextCompany = writable('');
	onMount(() => {
		filterTextCompany.subscribe(async (value) => {
			if (value) {
				await fetchCompanies(value);
			}
		});
	});

	const fetchCompanies = async (search: string): Promise<void> => {
		loading = true;
		try {
			const payload = {
				start: 1,
				length: 15,
				search: search,
				order: 'desc'
			};

			const response = await request.get('/company', payload);
			companies = response?.data?.data.map((company: any) => ({
				value: company.id,
				label: company.name
			}));
		} catch (error) {
			console.error('Error fetching companies:', error);
		} finally {
			loading = false;
		}
	};

	onMount(() => {});

	companies =
		data?.response?.map((company) => ({
			value: company.id,
			label: company.name
		})) ?? [];

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		let value = input.value.replace(/[^\d]/g, ''); // Remove all non-digit characters

		basicSalary = parseInt(value || '0', 10);
		formatBasicSalary = basicSalary ? `${basicSalary.toLocaleString('id-ID')}` : '';
	}
	console.log(selectedItemCompany);
</script>

<!-- <p>
	Selected Item:
	<strong>{selectedItemCompany ? selectedItemCompany.value : 'None'}</strong>
</p>
<p>
	Query:
	<strong>{queryCompany}</strong>
</p>
<p>
	Same:
	<strong>
		{selectedItemCompany && queryCompany === selectedItemCompany.value
			? selectedItemCompany.value
			: 'not same'}
	</strong>
</p> -->

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
			<InputSelect
				options={companies}
				bind:query={queryCompany}
				bind:selectedItem={selectedItemCompany}
				fetchData={fetchCompanies}
				id="companyId"
				name="companyId"
				label="Company"
				placeholder="Select an option"
				required={true}
			/>
			<InputSelect
				options={levels}
				bind:query={queryLevel}
				bind:selectedItem={selectedItemLevel}
				allowCustomInput={true}
				{validations}
				id={'levelId'}
				name={'levelId'}
				label={'Level position'}
				placeholder={'Select an option'}
				required={true}
			/>
			<InputSelect
				options={officers}
				bind:query={queryOfficer}
				bind:selectedItem={selectedItemOfficer}
				allowCustomInput={true}
				{validations}
				id={'officerId'}
				name={'officerId'}
				label={'Officer position'}
				placeholder={'Select an option'}
				required={true}
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
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ps-10"
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
