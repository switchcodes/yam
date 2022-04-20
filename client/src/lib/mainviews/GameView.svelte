<script lang="ts">
	import { onMount } from 'svelte';
	import { GameEngine } from '$scripts';

	onMount(async () => {
		const screen = document.getElementById('screen');
		const game = new GameEngine(screen);
	});
</script>

<section id="screen" class="absolute w-full h-full" />
