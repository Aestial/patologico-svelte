<script>
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import SwipeControl from './SwipeControl.svelte';
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section>
	<SwipeControl />
	<Patologico shirtColor="#7ea889" tieColor="#690000" tiePatternColor="#d45500"/>
	<BurgerMenu />
</section>