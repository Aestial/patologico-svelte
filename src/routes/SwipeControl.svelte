<script lang="ts">
	import { swipe } from 'svelte-gestures';

	let direction;
	let target;

	function handler(event) {
		direction = event.detail.direction;
		target = event.detail.target;

		console.log(direction);
		console.log(target);
	}
</script>

<div use:swipe={{ timeframe: 300, minSwipeDistance: 60 }} on:swipe={handler} class="swipe-control">
	<span>DEBUG. Direction: {direction}</span>
</div>

<style>
	div {
        min-height: 99vh;
		background-color: transparent;
	}
</style>