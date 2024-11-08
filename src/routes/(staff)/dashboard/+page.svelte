<script lang="ts">
	import { onMount } from 'svelte';
	import request from '../../../utils/request';

	let sellerDatas: Array<{ name: string; id: string }> = [];
	let loading: boolean = true;

	onMount(async () => {
		try {
			const response = await request.get(
				`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`
			);
			sellerDatas = response.data;
		} catch (error) {
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<h1>Loading</h1>
{:else}
	<ul>
		{#each sellerDatas as province}
			<li>{province.name} | {province.id}</li>
		{/each}
	</ul>
{/if}
