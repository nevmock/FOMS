<script lang="ts">
	import { onMount } from 'svelte';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';

	// Loading state
	let loading = true;

	let name: string = '';
	let email: string = '';
	let emailVerified: Date;
	let password: string = '';

	onMount(() => {
		setTimeout(() => {
			// Populate the form fields with default values
			(name = 'Muhammad Arya Firmansyah'),
				(email = 'aryafirmansyah200404@gmail.com'),
				(emailVerified = new Date()),
				(password = 'arya123'),
				// Stop loading
				(loading = false);
		}, 2000); // Simulate 2 seconds loading time
	});

	function formatDate(date: Date | null) {
		if (!date) return '';

		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');

		return `${year}-${month}-${day}T${hours}:${minutes}`;
	}
</script>

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Edit Users</h1>
</div>
<div class="h-7"></div>
<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">User Profile</h2>
		<p class="text-sm text-gray-400">Put the User Profile details in</p>
	</div>
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
			<span class="ml-2 text-gray-700">Loading...</span>
		</div>
	{:else}
		<form class="p-4">
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label for="name" class="block mb-2 text-sm font-medium text-gray-900"
						>Name<span class="text-red-500">*</span></label
					>
					<input
						type="text"
						id="name"
						name="name"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder=" "
						bind:value={name}
						required
					/>
				</div>
				<div>
					<label for="email" class="block mb-2 text-sm font-medium text-gray-900"
						>Email<span class="text-red-500">*</span></label
					>
					<input
						type="email"
						id="email"
						name="email"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder=" "
						bind:value={email}
						required
					/>
				</div>
				<div>
					<label for="emailVerified" class="block mb-2 text-sm font-medium text-gray-900"
						>Email verified at<span class="text-red-500">*</span></label
					>
					<input
						type="datetime-local"
						id="emailVerified"
						name="emailVerified"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder=" "
						value={emailVerified ? formatDate(emailVerified) : ''}
						required
					/>
				</div>
				<div>
					<label for="password" class="block mb-2 text-sm font-medium text-gray-900"
						>Password<span class="text-red-500">*</span></label
					>
					<input
						type="password"
						id="password"
						name="password"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						placeholder=" "
						bind:value={password}
						required
					/>
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
