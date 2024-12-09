<script>
	export let message = 'Loading...';
</script>

<div class="flex flex-col items-center justify-center h-screen bg-gray-50">
	<div
		class="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
	></div>
	<p class="mt-4 text-gray-600">{message}</p>
</div>
