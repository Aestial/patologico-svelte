<script>
	import Patologico from './Patologico.svelte';
	import BurgerMenu from './BurgerMenu.svelte';
	import Swiper from './Swiper.svelte';

	const colors = {
		pattern: "#d45500",
		shirt: "#7ea889",
		tie: "#690000"
	};
	
	function updateColor(event) {		
		switch (event.detail) {
			case 'left':
				console.log('Back');
				colors.pattern = "#fff";
				break;
			case 'right':
				console.log('Next');
				colors.pattern = "#000";
				break;
		}
	}
</script>

<svelte:head>
	<title>Patologico</title>
	<meta name="description" content="Patologico ultra hi-res character" />
</svelte:head>

<section>
	<Swiper on:swipe={updateColor}/>
	<Patologico {...colors} />
	<BurgerMenu />
</section>