<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Loading from '../../../components/loading/Loading.svelte';
	import Pagination from '../../../components/pagination/Pagination.svelte';
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	import request from '../../../utils/request';
	import { onMount } from 'svelte';

	export let data: {
		response: { code: number; status: string; recordsTotal: number; data: any[]; error: any };
	};

	let companies = data.response?.data || [];
	let recordsTotal = data.response?.recordsTotal || 0;

	let loading: boolean = false;
	let start = Number($page.url.searchParams.get('start') ?? 1);
	let length = Number($page.url.searchParams.get('length') ?? 10);
	let search = '';
	let timeout: NodeJS.Timeout;

	// Debounce function to delay search input handling
	const hanldeSearch = (e: Event) => {
		const target = e.currentTarget as HTMLInputElement;

		// Clear the previous timeout to reset debounce
		clearTimeout(timeout);

		// Set a new timeout for the debounce delay (700ms)
		timeout = setTimeout(() => {
			search = target.value;
			goto(`?start=1`);
			fetchCompanies(search, 1);
		}, 700);
	};

	// Function to handle fetching companies
	const fetchCompanies = async (search: string, start: Number) => {
		loading = true;
		const payload = {
			start: start,
			length: length,
			search: search, // Using the search parameter
			sort: 'desc'
		};

		try {
			const response = await request.get('/company', payload);
			companies = response?.data?.data || []; // Update companies data
			recordsTotal = response?.data?.recordsTotal || 0; // Update recordsTotal
			loading = false; // Set loading to false after fetching data
		} catch (error) {
			console.error('Error fetching companies:', error);
			loading = false; // Set loading to false if there's an error
		}
	};

	const handleDelete = async (id: string) => {
		loading = true;
		try {
			const response = await request.delete(`/company/${id}`);
			if (response.status === 200 || response.status === 201) {
				console.info('Company deleted successfully');
				location.assign('/company');
			} else {
				console.error('Failed to delete the company');
			}
		} catch (error) {
			console.error('Error during deletion', error);
		} finally {
			loading = false;
		}
	};
</script>

<div class="border-2 border-gray-200 bg-white rounded-lg px-2 py-3">
	<Breadcrumbs />
</div>

<div class="h-4"></div>

<div class="border-2 border-gray-200 bg-white rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4 flex justify-between">
		<h2 class="block text-base font-semibold text-gray-900">Company List</h2>
	</div>

	<div class="p-4">
		<div class="relative overflow-x-auto sm:rounded-lg">
			<div class="pb-4 bg-white flex justify-between items-center">
				<div class="relative flex items-center">
					<input
						type="text"
						id="search"
						name="search"
						bind:value={search}
						class="w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block ps-10 p-2.5"
						placeholder="Search for companies"
						on:input={hanldeSearch}
					/>
					<button
						type="button"
						class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 cursor-pointer bg-transparent"
						aria-label="Search"
					>
						<svg
							class="w-4 h-4 text-gray-500"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 20 20"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							/>
						</svg>
					</button>
				</div>

				<a
					href="/company/create"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full inline-flex items-center gap-2 sm:w-auto px-5 py-2.5 text-center"
				>
					Create Company
				</a>
			</div>

			<!-- Loading spinner -->
			{#if loading}
				<Loading message="Please wait, loading data..." />
			{:else}
				<table class="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" class="px-6 py-3">Logo</th>
							<th scope="col" class="px-6 py-3">Name</th>
							<th scope="col" class="px-6 py-3">Address</th>
							<th scope="col" class="px-6 py-3">Code</th>
							<th scope="col" class="px-6 py-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{#each companies as company}
							<tr class="bg-white border-b">
								<th class="px-6 py-4">
									<img
										class="w-10 h-10 object-cover"
										src={'/static' + company.logoUri}
										alt="company_logo"
									/>
								</th>
								<th class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
									>{company.name}</th
								>
								<td class="px-6 py-4">{company.address}</td>
								<td class="px-6 py-4">{company.code}</td>
								<td class="px-6 py-4 inline-flex items-center gap-2">
									<a
										href={`/company/${company.id}`}
										class="text-blue-700 bg-white hover:bg-blue-200 border-2 border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full gap-2 sm:w-auto px-5 py-2.5 text-center"
									>
										Edit
									</a>
									<button
										on:click={async () => await handleDelete(company.id)}
										type="button"
										class="text-red-700 bg-white hover:bg-red-200 border-2 border-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full gap-2 sm:w-auto px-5 py-2.5 text-center"
									>
										Delete
									</button>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			{/if}

			{#if !loading}
				<Pagination limit={length} page={start} {recordsTotal} />
			{/if}
		</div>
	</div>
</div>
