<script lang="ts">
	import Select from 'svelte-select';
	import moment from 'moment';
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { createEventDispatcher, onMount } from 'svelte';
	import { BsTrashFill } from 'svelte-icons-pack/bs';
	import { BiChevronDown, BiChevronUp } from 'svelte-icons-pack/bi';
	import { CgSwapVertical } from 'svelte-icons-pack/cg';
	import { Icon } from 'svelte-icons-pack';

	const dispatch = createEventDispatcher();

	let employeeName: { label: string; value: string } | null = null;
	let employeeNip: string | null = null;
	let tmt: string | null = null;
	let companyName: string | null = null;
	let levelPosition: string | null = null;
	let officerPosition: string | null = null;
	let basicSalary: number = 1000;
	let monthSalary: string | null = null;

	let salaryAllowance: Record<string, number> = {
		positionAllowance: 0,
		bpjsAllowance: 0,
		taxAllowance: 0
	};
	let anotherSalaryDeduction: { description: string; amount: number; showDetails: boolean }[] = [
		{ description: '', amount: 0, showDetails: true }
	];
	let anotherSalaryAllowance: {
		showDetails: boolean;
		description: string;
		amount: number;
	}[] = [{ description: '', amount: 0, showDetails: true }];

	let salaryFields: Record<string, number> = {
		positionAllowance: 0,
		bpjsAllowance: 0,
		taxAllowance: 0,
		positionDeduction: 0,
		bpjsDeduction: 0,
		taxDeduction: 0
	};
	let subTotalAllowance: number = 0;
	let subTotalDeduction: number = 0;
	let subTotalSalary: number = 0;

	let listEmployee: Array<{ value: string | number; label: string; created?: boolean }> = [
		{ value: 'Arya Firmansyah', label: 'Arya Firmansyah' }
	];

	function handleInput(event: Event) {
		const input = event.target as HTMLInputElement;
		const fieldName = input.name;
		let value = input.value.replace(/[^\d]/g, '');

		salaryFields[fieldName] = parseInt(value || '0', 10);
		updateSubtotalDeduction();
		updateSubtotalAllowance();
	}

	function formatSalary(salary: number): string {
		return salary ? salary.toLocaleString('id-ID') : '';
	}

	function handleAddDeduction() {
		// Create a new array to trigger Svelte's reactivity
		anotherSalaryDeduction = [
			...anotherSalaryDeduction,
			{ description: '', amount: 0, showDetails: true }
		];
	}
	function handleAddAllowance() {
		// Create a new array to trigger Svelte's reactivity
		anotherSalaryAllowance = [
			...anotherSalaryAllowance,
			{ description: '', amount: 0, showDetails: true }
		];
	}

	function handleInputAnotherDeduction(e: Event, index: number, field: string) {
		const target = e.target as HTMLInputElement;
		let value = target.value;

		if (field === 'description') {
			anotherSalaryDeduction[index].description = value;
		} else if (field === 'amount') {
			let numericValue = value.replace(/[^\d]/g, '');
			anotherSalaryDeduction[index].amount = parseInt(numericValue || '0', 10);
		}
		updateSubtotalDeduction();
	}

	function handleInputAnotherAllowance(e: Event, index: number, field: string) {
		const target = e.target as HTMLInputElement;
		const value = target.value;
		if (field === 'description') {
			anotherSalaryAllowance[index].description = value;
		} else if (field === 'amount') {
			let numericValue = value.replace(/[^\d]/g, '');
			anotherSalaryAllowance[index].amount = parseInt(numericValue || '0', 10);
		}
		updateSubtotalAllowance();
	}

	function handleDeleteDeduction(index: number) {
		// Remove the item at the given index
		anotherSalaryDeduction = anotherSalaryDeduction.filter((_, i) => i !== index);
		updateSubtotalDeduction(); // Recalculate subtotal after deletion
	}
	function handleDeleteAllowance(index: number) {
		// Remove the item at the given index
		anotherSalaryAllowance = anotherSalaryAllowance.filter((_, i) => i !== index);
		updateSubtotalAllowance(); // Recalculate subtotal after deletion
	}

	function updateSubtotalDeduction() {
		subTotalDeduction =
			salaryFields['positionDeduction'] +
			salaryFields['bpjsDeduction'] +
			salaryFields['taxDeduction'] +
			anotherSalaryDeduction.reduce((total, deduction) => total + deduction.amount, 0);
	}
	function updateSubtotalAllowance() {
		subTotalAllowance =
			salaryFields['positionAllowance'] +
			salaryFields['bpjsAllowance'] +
			salaryFields['taxAllowance'] +
			anotherSalaryAllowance.reduce((total, deduction) => total + deduction.amount, 0);
	}

	function handleToggleDetails(index: number) {
		anotherSalaryAllowance[index].showDetails = !anotherSalaryAllowance[index].showDetails;
	}
	function handleToggleDetailsAllowance(index: number) {
		anotherSalaryAllowance[index].showDetails = !anotherSalaryAllowance[index].showDetails;
	}
	function handleToggleDetailsDeduction(index: number) {
		anotherSalaryDeduction[index].showDetails = !anotherSalaryDeduction[index].showDetails;
	}
	function handleCollapseAll(type: string, close: boolean) {
		if (type === 'allowance') {
			anotherSalaryAllowance = anotherSalaryAllowance.map((allowance) => ({
				...allowance,
				showDetails: close
			}));
		} else if (type === 'deduction') {
			anotherSalaryDeduction = anotherSalaryDeduction.map((deduction) => ({
				...deduction,
				showDetails: close
			}));
		}
	}

	$: {
		employeeNip = employeeName ? '102012300020' : null;
		tmt = employeeName ? moment().format('D MMMM YYYY') : null;
		companyName = employeeName ? 'PT Inagata Indonesia' : null;
		levelPosition = employeeName ? 'Senior Manager' : null;
		officerPosition = employeeName ? 'Chief Financial Officer (CFO)' : null;
		basicSalary = employeeName ? 1000000 : 0;
	}

	$: subTotalSalary = basicSalary + subTotalAllowance - subTotalDeduction;

	$: console.log();
</script>

<div class="flex flex-col gap-2">
	<Breadcrumbs />
	<h1 class="text-3xl text-gray-900 font-semibold">Create Salary</h1>
</div>

<div class="h-7"></div>

<form action="">
	<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white">
		<div class="p-4">
			<h2 class="block text-base font-semibold text-gray-900">Employee Profile</h2>
			<p class="text-sm text-gray-400">Select the Employee Information details in.</p>
		</div>
		<div class="p-4">
			<div class="grid gap-6 mb-6 lg:grid-cols-3 md:grid-cols-2">
				<div>
					<label for="employeeName" class="block mb-2 text-sm font-medium text-gray-900"
						>Employee name</label
					>
					<Select
						id="employeeName"
						name="employeeName"
						items={listEmployee}
						bind:value={employeeName}
						placeholder="Select an option"
						class="foo bar"
					/>
				</div>
				<div>
					<label for="companyName" class="block mb-2 text-sm font-medium text-gray-900"
						>Company name</label
					>
					<input
						type="text"
						id="companyName"
						name="companyName"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						bind:value={companyName}
						disabled
					/>
				</div>

				<div>
					<label for="employeeNip" class="block mb-2 text-sm font-medium text-gray-900"
						>Employee nip</label
					>
					<input
						type="text"
						id="employeeNip"
						name="employeeNip"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						bind:value={employeeNip}
						disabled
					/>
				</div>

				<div>
					<label for="tmt" class="block mb-2 text-sm font-medium text-gray-900">TMT</label>
					<input
						type="text"
						id="tmt"
						name="tmt"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						bind:value={tmt}
						disabled
					/>
				</div>
				<div>
					<label for="levelPosition" class="block mb-2 text-sm font-medium text-gray-900"
						>Level position</label
					>
					<input
						type="text"
						id="levelPosition"
						name="levelPosition"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						bind:value={levelPosition}
						disabled
					/>
				</div>
				<div>
					<label for="officerPosition" class="block mb-2 text-sm font-medium text-gray-900"
						>Officer position</label
					>
					<input
						type="text"
						id="officerPosition"
						name="officerPosition"
						class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
						bind:value={officerPosition}
						disabled
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="h-5"></div>
	<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white">
		<div class="p-4">
			<h2 class="block text-base font-semibold text-gray-900">Salary calculate</h2>
			<p class="text-sm text-gray-400">The following are details of salary calculate.</p>
		</div>
		<div class="p-4">
			<div class="mb-6">
				<label for="monthPicker" class="block mb-2 text-sm font-medium text-gray-900"
					>Month's salary</label
				>
				<input
					id="monthPicker"
					type="month"
					bind:value={monthSalary}
					class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full p-2.5"
					placeholder="YYYY-MM"
					required
				/>
			</div>
			<div class="mb-6">
				<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
					>Basic Salary</label
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
						value={formatSalary(basicSalary)}
						placeholder="0"
						disabled
					/>
				</div>
			</div>

			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div class="inline-block">
					<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white">
						<div class="p-4">
							<h2 class="block text-base font-semibold text-gray-900">Allowance</h2>
						</div>
						<div class="p-4">
							<div class="grid gap-6 mb-6 md:grid-cols-1">
								<div>
									<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
										>Position allowance</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="positionAllowance"
											name="positionAllowance"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.positionAllowance)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
										>BPJS allowance</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="bpjsAllowance"
											name="bpjsAllowance"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.bpjsAllowance)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<label for="taxAllowance" class="block mb-2 text-sm font-medium text-gray-900"
										>Tax allowance</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="taxAllowance"
											name="taxAllowance"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.taxAllowance)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<h1 class="block mb-3 text-sm font-medium text-gray-900">Another allowance</h1>
									<div class="flex gap-5 mb-6 text-sm font-medium text-gray-500">
										<button on:click={() => handleCollapseAll('allowance', false)}
											>Collapse all</button
										>
										<button on:click={() => handleCollapseAll('allowance', true)}>Expand all</button
										>
									</div>
									<div class="grid gap-6 mb-6 md:grid-cols-1">
										{#each anotherSalaryAllowance as allowance, index}
											<div class="grid md:grid-cols-1">
												<div
													class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white"
												>
													<div class="p-2 grid grid-cols-2">
														<div class="flex justify-start items-center">
															<button
																class="text-gray-500"
																on:click={() => handleDeleteAllowance(index)}
															>
																<Icon src={CgSwapVertical} className="w-8 h-8 " />
															</button>
														</div>

														<div class="flex justify-end items-center gap-3">
															<button
																class="text-red-500"
																on:click={() => handleDeleteAllowance(index)}
															>
																<Icon src={BsTrashFill} className="w-5 h-5 " />
															</button>
															<button
																class="text-gray-500"
																on:click={() => handleToggleDetailsAllowance(index)}
															>
																{#if allowance.showDetails}
																	<Icon src={BiChevronUp} className="w-7 h-7 " />
																{:else}
																	<Icon src={BiChevronDown} className="w-7 h-7 " />
																{/if}
															</button>
														</div>
													</div>
													{#if allowance.showDetails}
														<div class="p-4">
															<div class="grid grid-cols-2 gap-x-3">
																<div>
																	<label
																		for="descriptionAllowance"
																		class="block mb-2 text-sm font-medium text-gray-900"
																		>Description</label
																	>
																	<input
																		type="text"
																		id="descriptionAllowance"
																		name="descriptionAllowance"
																		class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																		bind:value={allowance.description}
																		on:input={(e) =>
																			handleInputAnotherAllowance(e, index, 'description')}
																	/>
																</div>
																<div class="mb-6">
																	<label
																		for="Amount"
																		class="block mb-2 text-sm font-medium text-gray-900"
																		>Amount</label
																	>
																	<div class="relative">
																		<div
																			class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
																		>
																			<h1 class="text-gray-500">Rp</h1>
																		</div>
																		<input
																			type="text"
																			id="Amount"
																			name="Amount"
																			class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
																			value={formatSalary(allowance.amount)}
																			on:input={(e) =>
																				handleInputAnotherAllowance(e, index, 'amount')}
																			placeholder="0"
																		/>
																	</div>
																</div>
															</div>
														</div>
													{/if}
												</div>
											</div>
										{/each}
									</div>
									<div class="text-center">
										<button
											type="button"
											class="inline-block shadow-md py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
											on:click={handleAddAllowance}>Add another allowance</button
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="inline-block">
					<div class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white">
						<div class="p-4">
							<h2 class="block text-base font-semibold text-gray-900">Deduction</h2>
						</div>
						<div class="p-4">
							<div class="grid gap-6 mb-6 md:grid-cols-1">
								<div>
									<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
										>Position deduction</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="positionDeduction"
											name="positionDeduction"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.positionDeduction)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
										>BPJS deduction</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="bpjsDeduction"
											name="bpjsDeduction"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.bpjsDeduction)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<label for="basicSalary" class="block mb-2 text-sm font-medium text-gray-900"
										>Tax deduction</label
									>
									<div class="relative">
										<div
											class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
										>
											<h1 class="text-gray-500">Rp</h1>
										</div>
										<input
											type="text"
											id="taxDeduction"
											name="taxDeduction"
											class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
											value={formatSalary(salaryFields?.taxDeduction)}
											on:input={handleInput}
											placeholder="0"
											required
										/>
									</div>
								</div>
								<div>
									<h1 class="block mb-3 text-sm font-medium text-gray-900">Another deduction</h1>
									<div class="flex gap-5 mb-6 text-sm font-medium text-gray-500">
										<button on:click={() => handleCollapseAll('deduction', false)}
											>Collapse all</button
										>
										<button on:click={() => handleCollapseAll('deduction', true)}>Expand all</button
										>
									</div>
									<div class="grid gap-6 mb-6 md:grid-cols-1">
										{#each anotherSalaryDeduction as deduction, index}
											<div class="grid md:grid-cols-1">
												<div
													class="border-2 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white"
												>
													<div class="p-2 grid grid-cols-2">
														<div class="flex justify-start items-center">
															<button class="text-gray-500">
																<Icon src={CgSwapVertical} className="w-8 h-8 " />
															</button>
														</div>

														<div class="flex justify-end items-center gap-3">
															<button
																class="text-red-500"
																on:click={() => handleDeleteDeduction(index)}
															>
																<Icon src={BsTrashFill} className="w-5 h-5 " />
															</button>
															<button
																class="text-gray-500"
																on:click={() => handleToggleDetailsDeduction(index)}
															>
																{#if deduction.showDetails}
																	<Icon src={BiChevronUp} className="w-7 h-7 " />
																{:else}
																	<Icon src={BiChevronDown} className="w-7 h-7 " />
																{/if}
															</button>
														</div>
													</div>
													{#if deduction.showDetails}
														<div class="p-4">
															<div class="grid grid-cols-2 gap-x-3">
																<div>
																	<label
																		for="descriptionAllowance"
																		class="block mb-2 text-sm font-medium text-gray-900"
																		>Description</label
																	>
																	<input
																		type="text"
																		id="descriptionAllowance"
																		name="descriptionAllowance"
																		class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																		bind:value={deduction.description}
																		on:input={(e) =>
																			handleInputAnotherDeduction(e, index, 'description')}
																	/>
																</div>
																<div class="mb-6">
																	<label
																		for="Amount"
																		class="block mb-2 text-sm font-medium text-gray-900"
																		>Amount</label
																	>
																	<div class="relative">
																		<div
																			class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
																		>
																			<h1 class="text-gray-500">Rp</h1>
																		</div>
																		<input
																			type="text"
																			id="Amount"
																			name="Amount"
																			class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
																			value={formatSalary(deduction.amount)}
																			on:input={(e) =>
																				handleInputAnotherDeduction(e, index, 'amount')}
																			placeholder="0"
																		/>
																	</div>
																</div>
															</div>
														</div>
													{/if}
												</div>
											</div>
										{/each}
									</div>
									<div class="text-center">
										<button
											type="button"
											class="inline-block shadow-md py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
											on:click={handleAddDeduction}>Add another deduction</button
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="grid gap-6 mb-6 md:grid-cols-2">
				<div>
					<label for="subTotalAllowance" class="block mb-2 text-sm font-medium text-gray-900"
						>A. Sub total allowance</label
					>
					<div class="relative">
						<div
							class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
						>
							<h1 class="text-gray-500">Rp</h1>
						</div>
						<input
							type="text"
							id="subTotalAllowance"
							name="subTotalAllowance"
							class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
							value={formatSalary(subTotalAllowance)}
							placeholder="0"
							disabled
						/>
					</div>
				</div>
				<div>
					<label for="subTotalDeduction" class="block mb-2 text-sm font-medium text-gray-900"
						>B. Sub total deduction</label
					>
					<div class="relative">
						<div
							class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
						>
							<h1 class="text-gray-500">Rp</h1>
						</div>
						<input
							type="text"
							id="subTotalDeduction"
							name="subTotalDeduction"
							class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
							value={formatSalary(subTotalDeduction)}
							placeholder="0"
							disabled
						/>
					</div>
				</div>
			</div>
			<div class="border-2 mb-6 border-gray-200 rounded-lg grid grid-cols-1 divide-y bg-white">
				<div class="p-4">
					<h2 class="block text-base font-semibold text-gray-900">Total salary received</h2>
					<p class="text-sm text-gray-400">
						Basic salary + Sub total allowance - Sub total deduction.
					</p>
				</div>
				<div class="p-4">
					<div class="grid gap-6 my-4 md:grid-cols-1">
						<div>
							<div class="relative">
								<div
									class="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none"
								>
									<h1 class="text-gray-500">Rp</h1>
								</div>
								<input
									type="text"
									id="positionDeduction"
									name="positionDeduction"
									class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 outline-none block w-full ps-10 p-2.5"
									value={formatSalary(subTotalSalary)}
									placeholder="0"
									disabled
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button
				type="submit"
				class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
			>
				Create
			</button>
		</div>
	</div>
</form>
