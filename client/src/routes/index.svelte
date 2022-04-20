<script>
	import Board from '$scripts/Board';
	let gen = () => {
		let board = new Board();
		board.generate();
	};
</script>

<div class="grid place-items-center  text-blue-800">
	<h1 class="text-7xl">Welcome to YAM</h1>
	<p class="text-xl">game coming soon</p>
	<button class="w-28 h-28 bg-white" on:click={gen}>123</button>
</div>
