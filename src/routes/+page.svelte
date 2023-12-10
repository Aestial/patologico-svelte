<script lang="ts">
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import Swiper from './Swiper.svelte';
	import colorLib from '$lib/json/colors.json';
	import { onMount } from 'svelte';

	const colors = {
		pattern: '#d45500',
		shirt: '#7ea889',
		tie: '#690000'
	};

	const indices = {
		pattern: getRandomInt(colorLib.tie.length),
		shirt: getRandomInt(colorLib.shirt.length),
		tie: getRandomInt(colorLib.tie.length)
	};

	onMount(() => {
		colors.pattern = colorLib.tie[indices.pattern];
		colors.shirt = colorLib.shirt[indices.shirt];
		colors.tie = colorLib.tie[indices.tie];
	});

	function updateColor(event: any) {
		switch (event.detail) {
			case 'left':
				console.log('Back');
				colors.shirt = selectFromArray(colorLib.shirt, false);
				break;
			case 'right':
				console.log('Next');
				colors.shirt = selectFromArray(colorLib.shirt, true);
				break;
		}
	}

	function selectFromArray(options: string[], forward: boolean = true): string {
		if (forward) {
			if (indices.shirt++ >= options.length - 1) indices.shirt = 0;
		} else {
			if (indices.shirt-- <= 0) indices.shirt = options.length - 1;
		}
		return options[indices.shirt];
	}

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section>
	<Swiper on:swipe={updateColor} />
	<Patologico {...colors} />
	<BurgerMenu />
</section>
