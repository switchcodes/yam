<script>
	import '../app.css';
	import GameView from '$lib/mainviews/GameView.svelte';
</script>

<main class="h-full w-full relative">
	<div
		class="absolute top-0 bottom-0 right-0 left-0 w-fit h-fit max-h-full max-w-full z-10 block select-none"
	>
		<slot />
	</div>
	<GameView />
</main>
