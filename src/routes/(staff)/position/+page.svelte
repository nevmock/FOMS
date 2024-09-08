<script lang="ts">
	import Breadcrumbs from '../../../components/Breadcrumbs.svelte';
	let loading = true;
	let positions: Array<{ company: string; level: string; officer: string; salary: number }> = [];

	// Simulate data fetching
	setTimeout(() => {
		positions = [
			{
				company: 'Adidas',
				level: 'Senior Manager',
				officer: 'Chief Financial Officer (CFO)',
				salary: 1000000
			}
		];
		loading = false;
	}, 2000); // Simulate a 2-second delay to fetch data
</script>

<div class="border-2 border-gray-200 bg-white rounded-lg px-2 py-3">
	<Breadcrumbs />
</div>
<div class="h-4"></div>
<div class="border-2 border-gray-200 bg-white rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4 flex justify-between">
		<h2 class="block text-base font-semibold text-gray-900">Position list</h2>
	</div>
	<div class="p-4">
		<div class="relative overflow-x-auto sm:rounded-lg">
			<div class="pb-4 bg-white flex justify-between items-center">
				<div class="relative">
					<div
						class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
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
					</div>
					<input
						type="text"
						id="basicSalary"
						name="basicSalary"
						class="w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block ps-10 p-2.5"
						placeholder="Search for companies"
						required
					/>
				</div>
				<a
					href="/position/create"
					class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full inline-flex items-center gap-2 sm:w-auto px-5 py-2.5 text-center"
				>
					Create position
				</a>
			</div>

			<!-- Loading spinner -->
			{#if loading}
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
					<span class="ml-2 text-gray-700">Loading positions...</span>
				</div>
			{:else}
				<table class="w-full text-sm text-left rtl:text-right text-gray-500">
					<thead class="text-xs text-gray-700 uppercase bg-gray-50">
						<tr>
							<th scope="col" class="px-6 py-3">Compoany</th>
							<th scope="col" class="px-6 py-3">Level position</th>
							<th scope="col" class="px-6 py-3">Officer position</th>
							<th scope="col" class="px-6 py-3">Salary</th>
							<th scope="col" class="px-6 py-3">Action</th>
						</tr>
					</thead>
					<tbody>
						{#each positions as position}
							<tr class="bg-white border-b">
								<th class="px-6 py-4">
									{position.company}
								</th>
								<td class="px-6 py-4">{position.level}</td>
								<td class="px-6 py-4">{position.officer}</td>
								<td class="px-6 py-4">Rp.{position.salary.toLocaleString('id-ID')}</td>
								<td class="px-6 py-4 inline-flex items-center gap-2">
									<a
										href="/company/edit"
										class="text-blue-700 bg-white hover:bg-blue-200 border-2 border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm w-full gap-2 sm:w-auto px-5 py-2.5 text-center"
									>
										Edit
									</a>
									<button
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
				<nav class="flex items-center justify-between pt-4" aria-label="Table navigation">
					<span class="text-sm font-normal text-gray-500"
						>Showing <span class="font-semibold text-gray-900">1-10</span> of
						<span class="font-semibold text-gray-900">1000</span></span
					>
					<ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
						<li>
							<a
								href="/position"
								class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
								>Previous</a
							>
						</li>
						<li>
							<a
								href="/position"
								class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
								>1</a
							>
						</li>
						<li>
							<a
								href="/position"
								class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
								>2</a
							>
						</li>
						<li>
							<a
								href="/position"
								aria-current="page"
								class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
								>3</a
							>
						</li>
						<li>
							<a
								href="/position"
								class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
								>4</a
							>
						</li>
						<li>
							<a
								href="/position"
								class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
								>Next</a
							>
						</li>
					</ul>
				</nav>
			{/if}
		</div>
	</div>
</div>
