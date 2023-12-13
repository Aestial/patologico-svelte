<script lang="ts">
	import BurgerMenu from './BurgerMenu.svelte';
	import PagerInput from './PagerInput.svelte';
	import Patologico from './Patologico.svelte';
	import { tool, bgOpt, patternOpt, shirtOpt, tieOpt } from '../stores';

	$: background = bgOpt.color;
	$: pattern = patternOpt.color;
	$: shirt = shirtOpt.color;
	$: tie = tieOpt.color;

	// TODO: Improve following functions removing switch. Use interfaces?

	function nextColor(event: any) {
		console.log('Next');
		switch ($tool) {
			case 'brush':
				bgOpt.increment();
				break;
			case 'diamond':
				patternOpt.increment();
				break;
			case 'shirt':
				shirtOpt.increment();
				break;
			case 'tie':
				tieOpt.increment();
				break;
		}
	}

	function previousColor(event: any) {
		console.log('Back');
		switch ($tool) {
			case 'brush':
				bgOpt.decrement();
				break;
			case 'diamond':
				patternOpt.decrement();
				break;
			case 'shirt':
				shirtOpt.decrement();
				break;
			case 'tie':
				tieOpt.decrement();
				break;
		}
	}
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section style:--bg={$background}>
	<!-- Input component for navigating through colors. -->
	<PagerInput on:back={previousColor} on:next={nextColor} />
	<!-- Our SVG hero with customizable hex colors -->
	<Patologico pattern={$pattern} shirt={$shirt} tie={$tie} />
	<!-- Tool selection menu from a burger icon with show/hide features -->
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
