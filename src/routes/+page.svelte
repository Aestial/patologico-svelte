<script lang="ts">
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import PagerInput from './PagerInput.svelte';
	import colorLib from '$lib/json/colors.json';
	import { onMount } from 'svelte';

	const patoColors = {
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
		patoColors.pattern = colorLib.tie[indices.pattern];
		patoColors.shirt = colorLib.shirt[indices.shirt];
		patoColors.tie = colorLib.tie[indices.tie];
	});

	function nextColor(event: any) {
		console.log("Next");
		patoColors.pattern = selectFromArray(colorLib.tie, true);
		patoColors.shirt = selectFromArray(colorLib.shirt, true);
	}

	function previousColor(event: any) {
		console.log("Back");
		patoColors.pattern = selectFromArray(colorLib.tie, false);
		patoColors.shirt = selectFromArray(colorLib.shirt, false);
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
	<PagerInput on:back={previousColor} on:next={nextColor} />
	<Patologico {...patoColors} />
	<BurgerMenu />
</section>

<style>
	section {
		background-color: var(--bg);
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
</style>
