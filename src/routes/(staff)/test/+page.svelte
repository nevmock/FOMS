<script>
	import { onMount } from 'svelte';
	import toast, { Toaster } from 'svelte-french-toast';

	onMount(() => {
		toast.loading('Saving data...');
	});
</script>

<Toaster />
