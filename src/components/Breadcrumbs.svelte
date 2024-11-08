<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const paths = derived(page, ($page) =>
		$page.url.pathname.split('/').filter((path: string) => path !== '')
	);

	function formatText(input: string) {
		// Menghapus bagian kode unik jika ada
		let baseText = input;
		const uniqueCodeIndex = baseText.search(/\b[a-f0-9]{8}\b/);
		if (uniqueCodeIndex !== -1) {
			baseText = baseText.substring(0, uniqueCodeIndex - 1);
		}

		// Mengganti tanda hubung dengan spasi
		let formattedText = baseText.replace(/-/g, ' ');

		// Mengubah setiap kata menjadi kapital di awal
		formattedText = formattedText
			.split(' ')
			.map((word: string) => {
				return word.charAt(0).toUpperCase() + word.slice(1);
			})
			.join(' ');

		return formattedText;
	}
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol class="flex items-center text-sm font-medium md:">
		<li>
			<div class="flex items-center">
				<a
					href={`/dashboard`}
					class={`ml-1 text-gray-500 hover:text-primary-600 focus:outline-none focus:ring focus:ring-transparent  md:text-[16px] text-[12px]`}
				>
					Dashboard
				</a>
			</div>
		</li>
		<svg
			class="w-6 h-6 text-gray-400"
			fill="currentColor"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
				clip-rule="evenodd"
			></path>
		</svg>
		{#each $paths as link, index}
			{#if index > 0}
				<svg
					class="w-6 h-6 text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					></path>
				</svg>
			{/if}
			<li>
				<div class="flex items-center">
					<a
						href={`/${$paths.slice(0, index + 1).join('/')}`}
						class={`ml-1 ${
							$paths[$paths.length - 1].toUpperCase() == link.toUpperCase()
								? 'text-gray-500'
								: 'text-gray-500'
						} hover:text-primary-600 focus:outline-none focus:ring focus:ring-transparent  md:text-[16px] text-[12px]`}
					>
						{formatText(link).length > 30
							? `${formatText(link).substring(0, 30)}...`
							: formatText(link)}
					</a>
				</div>
			</li>
		{/each}
	</ol>
</nav>
