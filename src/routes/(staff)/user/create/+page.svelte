<script lang="ts">
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';

	let name: string = '';
	let email: string = '';
	let emailVerified: Date;
	let password: string = '';
</script>

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Create Users</h1>
</div>
<div class="h-7"></div>
<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">User Profile</h2>
		<p class="text-sm text-gray-400">Put the User Profile details in</p>
	</div>
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
					bind:value={emailVerified}
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
			>Create</button
		>
	</form>
</div>
