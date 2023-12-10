<script>
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section>
	<Patologico shirtColor="#7ea889" tieColor="#690000" tiePatternColor="#d45500"/>
	<BurgerMenu />
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}*/
</style>
