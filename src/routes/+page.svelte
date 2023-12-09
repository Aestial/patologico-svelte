<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import SideMenu from './SideMenu.svelte';
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section>
	<Patologico />
	<BurgerMenu />
	<!-- <SideMenu /> -->
</section>

<style>
	/* section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
