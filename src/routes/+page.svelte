<script lang="ts">
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import Swiper from './Swiper.svelte';
	import colorLib from '$lib/json/colors.json';
	import { onMount } from 'svelte';

	const colors = {
		background: '#cedce8',
		pattern: '#d45500',
		shirt: '#7ea889',
		tie: '#690000'
	};

	let bgColor = '#cedce8';

	const indices = {
		background: Math.randomInt(colorLib.background.length),
		pattern: Math.randomInt(colorLib.tie.length),
		shirt: Math.randomInt(colorLib.shirt.length),
		tie: Math.randomInt(colorLib.tie.length)
	};

	onMount(() => {
		bgColor = colorLib.background[indices.background];
		colors.pattern = colorLib.tie[indices.pattern];
		colors.shirt = colorLib.shirt[indices.shirt];
		colors.tie = colorLib.tie[indices.tie];
	});

	function updateColor(event: any) {
		switch (event.detail) {
			case 'left':
				console.log('Back');
				colors.pattern = selectFromArray(colorLib.tie, false);
				colors.shirt = selectFromArray(colorLib.shirt, false);
				break;
			case 'right':
				console.log('Next');
				colors.pattern = selectFromArray(colorLib.tie, true);
				colors.shirt = selectFromArray(colorLib.shirt, true);
				break;
		}
	}

	function selectFromArray(options: string[], forward: boolean = true): string {
		if (forward) {
			if (++indices.shirt >= options.length) indices.shirt = 0;
		} else {
			if (--indices.shirt < 0) indices.shirt = options.length - 1;
		}
		return options[indices.shirt];
	}

	
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section style:--bg={bgColor}>
	<Swiper on:swipe={updateColor} />
	<Patologico {...colors} />
	<BurgerMenu />
</section>

<style>
	section {
		background-color: var(--bg);
		position: fixed;
		width: 100vw;
		height: 100vh;
	}

	/* :global(body) {
		background-color: var(--bg) !important;
		background-image: none !important;
	} */

</style>