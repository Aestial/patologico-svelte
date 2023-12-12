<script lang="ts">
	import options from '$lib/json/colors.json';

	import BurgerMenu from './BurgerMenu.svelte';
	import ColorPick from './ColorPick.svelte';
	import PagerInput from './PagerInput.svelte';
	import Patologico from './Patologico.svelte';

	const colors = {
		bg: "#fff",
		pato: {
			pattern: "#fff",
			shirt: "#fff",
			tie: "#fff"
		}
	}

	function nextColor(event: any) {
		console.log('Next');
	}

	function previousColor(event: any) {
		console.log('Back');
	}
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section style:--bg={colors.bg}>
	<PagerInput on:back={previousColor} on:next={nextColor} />
	<Patologico {...colors.pato} />
	<BurgerMenu />
	<ColorPick bind:value={colors.bg} options={options.background} />
	<ColorPick bind:value={colors.pato.pattern} options={options.tie} />
	<ColorPick bind:value={colors.pato.shirt} options={options.shirt} />
	<ColorPick bind:value={colors.pato.tie} options={options.tie} />
</section>

<style>
	section {
		background-color: var(--bg);
		position: fixed;
		width: 100vw;
		height: 100vh;
	}
</style>