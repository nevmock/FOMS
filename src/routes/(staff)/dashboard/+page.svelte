<script lang="ts">
	import { onMount } from 'svelte';
	import request from '../../../utils/request';

	let companyDatas: Array<{
		id: string;
		name: string;
		address: string;
		code: string;
		logo_uri: string;
	}> = [];
	let loading: boolean = true;

	onMount(async () => {
		try {
			const response = await request.get(`/v1/company`);
			companyDatas = response.data.data;
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
		{#each companyDatas as company}
			<li>{company.name}</li>
		{/each}
	</ul>
{/if}
