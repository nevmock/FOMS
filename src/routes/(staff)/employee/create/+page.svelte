<script lang="ts">
	import Select from 'svelte-select';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let company: { label: string; value: string } | null = null;
	let levelPosition: { label: string; value: string } | null = null;
	let officerPosition: { label: string; value: string } | null = null;
	let nipEmployee: string | null = null;
	let nameEmployee: string | null = null;
	let tmtEmployee: Date | null = null;
	let gender: { label: string; value: string } | null = null;
	let whatsappEmployee: string | null = null;
	let emailEmployee: string | null = null;

	let filterTextLevelPosition = '';
	let filterTextOfficerPosition = '';

	let listGender: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 'Pria', label: ' Pria' },
		{ value: 'Wanita', label: ' Wanita' }
	];
	let listCompanies: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 'company 1', label: 'Company 1' }
	];
	let listLevelPositions: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 'level 1', label: 'Level 1' }
	];
	let listOfficerPositions: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 'officer 1', label: 'Officer 1' }
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
</script>

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Create Employee</h1>
</div>

<div class="h-7"></div>

<div class="bg-white border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y">
	<div class="p-4">
		<h2 class="block text-base font-semibold text-gray-900">Employee Profile</h2>
		<p class="text-sm text-gray-400">Put the Employee Profile details in</p>
	</div>
	<form class="p-4">
		<div class="grid gap-6 mb-6 lg:grid-cols-3 md:grid-cols-2">
			<div>
				<label for="company" class="block mb-2 text-sm font-medium text-gray-900"
					>Company<span class="text-red-500">*</span></label
				>
				<Select
					id="company"
					name="company"
					items={listCompanies}
					bind:value={company}
					placeholder="Select an option"
					class="foo bar"
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
				<label for="nipEmployee" class="block mb-2 text-sm font-medium text-gray-900"
					>NIP employee<span class="text-red-500">*</span></label
				>
				<input
					type="text"
					id="nipEmployee"
					name="nipEmployee"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					bind:value={nipEmployee}
					required
				/>
			</div>
			<div>
				<label for="nameEmployee" class="block mb-2 text-sm font-medium text-gray-900"
					>Name employee<span class="text-red-500">*</span></label
				>
				<input
					type="text"
					id="nameEmployee"
					name="nameEmployee"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					bind:value={nameEmployee}
					required
				/>
			</div>
			<div>
				<label for="tmtEmployee" class="block mb-2 text-sm font-medium text-gray-900"
					>TMT employee<span class="text-red-500">*</span></label
				>
				<input
					type="date"
					id="tmtEmployee"
					name="tmtEmployee"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					bind:value={tmtEmployee}
					required
				/>
			</div>
			<div>
				<label for="gender" class="block mb-2 text-sm font-medium text-gray-900"
					>Gender<span class="text-red-500">*</span></label
				>
				<Select
					id="gender"
					name="gender"
					items={listGender}
					bind:value={gender}
					placeholder="Select an option"
					class="foo bar"
				/>
			</div>
			<div>
				<label for="whatsappEmployee" class="block mb-2 text-sm font-medium text-gray-900"
					>Whatsapp employee<span class="text-red-500">*</span></label
				>
				<input
					type="text"
					id="whatsappEmployee"
					name="whatsappEmployee"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					bind:value={whatsappEmployee}
					required
				/>
			</div>
			<div>
				<label for="emailEmployee" class="block mb-2 text-sm font-medium text-gray-900"
					>Email employee<span class="text-red-500">*</span></label
				>
				<input
					type="email"
					id="emailEmployee"
					name="emailEmployee"
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					bind:value={emailEmployee}
					required
				/>
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
