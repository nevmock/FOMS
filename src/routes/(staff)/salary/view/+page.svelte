<script lang="ts">
	import Breadcrumbs from '../../../../components/Breadcrumbs.svelte';
	import { onMount } from 'svelte';
	let slip_salary: HTMLElement;
	let name: string = "Muhammad Arya Firmasnyah"

	let html2pdf: () => { (): any; new(): any; from: { (arg0: HTMLElement): {
		set(options: { filename: string; }): unknown; (): any; new(): any; save: { (): void; new(): any; }; 
}; new(): any; }; };

onMount(async () => {
    const module = await import('html2pdf.js');
    html2pdf = module.default;
});

  // Fungsi untuk mengunduh PDF
  const downloadPDF = () => {
		const options = {
			filename: `Slip Gaji | September 2024 | ${name}`, // Nama file yang diinginkan
		};

		// Menggunakan html2pdf dengan opsi custom filename
		html2pdf().from(slip_salary).set(options).save();
	};



	let loading: boolean = true;
</script>

<div class="grid gap-5">
	<div class="border-2 border-gray-200 bg-white rounded-lg px-2 py-3">
		<Breadcrumbs />
	</div>
	<div class="border-2 border-gray-200 bg-white rounded-lg grid grid-cols-1 divide-y">
		<div class="p-4 flex justify-between ">
			<h2 class="block text-base font-semibold text-gray-900">Salary slip</h2>
			<div class="inline-flex gap-x-2">
				<button
				type="button"
					class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50"
					on:click={downloadPDF}  
				>
					<svg
						class="shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline
							points="7 10 12 15 17 10"
						/><line x1="12" x2="12" y1="15" y2="3" /></svg
					>
					Invoice PDF
				</button>
				<a
					class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					href="#"
				>
					<svg
						class="shrink-0 size-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><polyline points="6 9 6 2 18 2 18 9" /><path
							d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
						/><rect width="12" height="8" x="6" y="14" /></svg
					>
					Print
				</a>
			</div>
		</div>
		<div bind:this={slip_salary} id="slip_salary">
			<!-- Invoice -->
			<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 grid gap-5">
				<!-- Grid -->
				<div class="flex justify-between">
					<div>
						<svg
							class="size-10"
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M1 26V13C1 6.37258 6.37258 1 13 1C19.6274 1 25 6.37258 25 13C25 19.6274 19.6274 25 13 25H12"
								class="stroke-black"
								stroke="currentColor"
								stroke-width="2"
							/>
							<path
								d="M5 26V13.16C5 8.65336 8.58172 5 13 5C17.4183 5 21 8.65336 21 13.16C21 17.6666 17.4183 21.32 13 21.32H12"
								class="stroke-black"
								stroke="currentColor"
								stroke-width="2"
							/>
							<circle
								cx="13"
								cy="13.0214"
								r="5"
								fill="currentColor"
								class="fill-black dark:fill-black"
							/>
						</svg>

						<h1 class="mt-2 text-lg md:text-xl font-semibold text-black">Preline Inc.</h1>
					</div>
					<!-- Col -->

					<div class="text-end">
						<address class="mt-4 not-italic text-gray-800 ">
							45 Roker Terrace<br />
							Latheronwheel<br />
							KW5 8NW, London<br />
							United Kingdom<br />
						</address>
					</div>
					<!-- Col -->
				</div>
				<!-- End Grid -->
				<div class=" border-b border-gray-200"></div>
				<!-- Grid -->
				<div class="grid md:grid-cols-2 gap-3">
					<div>
						<div class="grid space-y-3">
							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Employee id:</dt>
								<dd class="font-medium text-gray-800">
									<span class="block font-semibold">103012300020</span>
								</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Employee name:</dt>
								<dd class="font-medium text-gray-800">
									<span class="block font-semibold">Sara Williams</span>
								</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">NPWP:</dt>
								<dd class="font-medium text-gray-800">
									<span class="block font-semibold">54.168.223.6-000.000</span>
								</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">PTKP:</dt>
								<dd class="font-medium text-gray-800">
									<span class="block font-semibold">TK/0</span>
								</dd>
							</dl>
						</div>
					</div>
					<!-- Col -->

					<div>
						<div class="grid space-y-3">
							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Department:</dt>
								<dd class="font-medium text-gray-800">Research & Development</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Position:</dt>
								<dd class="font-medium text-gray-800">UI-UX Designer</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Period:</dt>
								<dd class="font-medium text-gray-800">January 2023</dd>
							</dl>

							<dl class="flex flex-col sm:flex-row gap-x-3 text-sm">
								<dt class="min-w-36 max-w-[200px] text-gray-500">Branch:</dt>
								<dd class="font-medium text-gray-800">Head Quarter</dd>
							</dl>
						</div>
					</div>
					<!-- Col -->
				</div>
				<!-- End Grid -->

				<!-- Table -->
				<div class="grid md:grid-cols-2 gap-3">
                    <!-- Allowance Section -->
                    <div class="mt-6 border border-gray-200 p-4 rounded-lg flex flex-col space-y-4">
                        <!-- Allowance Header -->
                        <div class="hidden sm:grid sm:grid-cols-2">
                            <div class="text-xs font-medium text-gray-500 uppercase">Reception</div>
                            <div class="text-xs font-medium text-gray-500 uppercase">Amount</div>
                        </div>
                        <div class="hidden sm:block border-b border-gray-200"></div>
                
                        <!-- Allowance Items -->
                        <div class="flex-grow space-y-4">
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Description
                                    </h5>
                                    <p class="font-medium text-gray-800">Basic Salary</p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Amount
                                    </h5>
                                    <p class="text-gray-800">$500</p>
                                </div>
                            </div>
                
                            <div class="sm:hidden border-b border-gray-200"></div>
                
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Description
                                    </h5>
                                    <p class="font-medium text-gray-800">Tunjangan Jabatan</p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Amount
                                    </h5>
                                    <p class="text-gray-800">$1250</p>
                                </div>
                            </div>
                
                            <div class="sm:hidden border-b border-gray-200"></div>
                
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Description
                                    </h5>
                                    <p class="font-medium text-gray-800">Tunjangan Bulanan</p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Amount
                                    </h5>
                                    <p class="text-gray-800">$2000</p>
                                </div>
                            </div>
                        </div>
                
                        <!-- Total Allowance -->
                        <div class="mt-auto border-t border-gray-200 pt-4">
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="font-bold text-gray-900 uppercase">Total Allowance</h5>
                                </div>
                                <div>
                                    <h5 class="font-bold text-gray-900 uppercase">$12000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <!-- Deduction Section -->
                    <div class="mt-6 border border-gray-200 p-4 rounded-lg flex flex-col space-y-4">
                        <!-- Deduction Header -->
                        <div class="hidden sm:grid sm:grid-cols-2">
                            <div class="text-xs font-medium text-gray-500 uppercase">Subtraction</div>
                            <div class="text-xs font-medium text-gray-500 uppercase">Amount</div>
                        </div>
                        <div class="hidden sm:block border-b border-gray-200"></div>
                
                        <!-- Deduction Items -->
                        <div class="flex-grow space-y-4">
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Description
                                    </h5>
                                    <p class="font-medium text-gray-800">PPh 21</p>
                                </div>
                                <div>
                                    <h5 class="sm:hidden text-xs font-medium text-gray-500 uppercase">
                                        Amount
                                    </h5>
                                    <p class="text-gray-800">$500</p>
                                </div>
                            </div>
                        </div>
                
                        <!-- Total Deduction -->
                        <div class="mt-auto border-t border-gray-200 pt-4">
                            <div class="grid grid-cols-2 gap-2">
                                <div>
                                    <h5 class="font-bold text-gray-900 uppercase">Total Deduction</h5>
                                </div>
                                <div>
                                    <h5 class="font-bold text-gray-900 uppercase">$12000</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
				<!-- End Table -->

				<!-- Flex -->
				<div class="mt-8 flex sm:justify-end">
					<div class="w-full max-w-2xl sm:text-end space-y-2">
						<!-- Grid -->
						<div class="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
							<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
								<dt class="col-span-3 text-gray-500">Subotal:</dt>
								<dd class="col-span-2 font-medium text-gray-800">$2750.00</dd>
							</dl>

							<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
								<dt class="col-span-3 text-gray-500">Total:</dt>
								<dd class="col-span-2 font-medium text-gray-800">$2750.00</dd>
							</dl>

							<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
								<dt class="col-span-3 text-gray-500">Tax:</dt>
								<dd class="col-span-2 font-medium text-gray-800">$39.00</dd>
							</dl>

							<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
								<dt class="col-span-3 text-gray-500">Amount paid:</dt>
								<dd class="col-span-2 font-medium text-gray-800">$2789.00</dd>
							</dl>

							<dl class="grid sm:grid-cols-5 gap-x-3 text-sm">
								<dt class="col-span-3 text-gray-500">Due balance:</dt>
								<dd class="col-span-2 font-medium text-gray-800">$0.00</dd>
							</dl>
						</div>
						<!-- End Grid -->
					</div>
				</div>
				<!-- End Flex -->
			</div>
			<!-- End Invoice -->
		</div>
	</div>
</div>
