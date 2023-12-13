<script lang="ts">
	import nest from '$lib/svg/loading.svg';
	import quack from '$lib/sounds/quack.mp3';

	import { onDestroy } from 'svelte';
	import { onMount } from 'svelte';

	export let self: any, time: any;

	onDestroy(() => {
		// console.log('Screensaver successfully destroyed!')
	});

	onMount(() => {
		setTimeout(() => {
			self.$destroy();
		}, time);
	});
</script>

<div class="screensaver">
	<!-- Load Screen -->
	<div class="screen" style="width:100%; height:100%;">
		<div class="container">
			<img class="icon" src={nest} alt="Egg in nest" />
		</div>
	</div>

	<!-- Audio Player -->
	<div id="audio_player">
		<audio autoplay hidden>
			<source src={quack} type="audio/mpeg" />
			If you're reading this, audio isn't supported.
		</audio>
	</div>
</div>

<style>
	.screen {
		position: absolute;
		background-color: #6f8a91;
		left: 0%;
		top: 0%;
		width: 100%;
		height: 100%;
		z-index: 9999;
	}
	.container {
		position: absolute;
		width: auto;
		top: 45%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.icon {
		width: 284px;
		height: 206px;
	}
	.icon:hover {
		-webkit-filter: grayscale(0%) brightness(2000%);
		filter: grayscale(0%) brightness(2000%);
	}
</style>
