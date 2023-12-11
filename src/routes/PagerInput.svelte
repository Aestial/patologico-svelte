<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { swipe } from 'svelte-gestures';

	const dispatch = createEventDispatcher();

	let DEBUG = false;
	let direction: any;
	let target;

	function keyHandler(event) {
		if (event.repeat) return;

		switch (event.key) {
			case 'a':
			case 'ArrowLeft':
				dispatch('back');
				break;
			case 'd':
			case 'ArrowRight':
				dispatch('next');
				break;
			default:
				return;
		}

		event.preventDefault();
	}

	function swipeHandler(event) {
		direction = event.detail.direction;
		target = event.detail.target;

		switch (direction) {
			case 'left':
				dispatch('back');
				break;
			case 'right':
				dispatch('next');
				break;
		}
	}
</script>

<!-- Keyboard handling -->
<svelte:window on:keydown|stopPropagation={keyHandler} />

<!-- Universal Swipe handling -->
<div
	use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
	on:swipe|stopPropagation={swipeHandler}
	class="swipe-control"
	aria-label="swiper"
	aria-roledescription="swipe controller"
>
	{#if DEBUG}
		<span>DEBUG. Direction: {direction}</span>
	{/if}
</div>

<style>
	div {
		min-height: 99vh;
		background-color: transparent;
	}
</style>
