<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { swipe } from 'svelte-gestures';

	const dispatch = createEventDispatcher();

	let direction: any;
	let target;

	let DEBUG = false;

	function handler(event) {
		direction = event.detail.direction;
		target = event.detail.target;

		switch (direction) {
			case 'left':
			case 'right':
				dispatch('swipe', direction);
				break;
		}
	}
</script>

<div
	use:swipe={{ timeframe: 300, minSwipeDistance: 60 }}
	on:swipe|stopPropagation={handler}
	class="swipe-control"
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
