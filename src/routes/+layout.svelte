<script>
	import Header from './Header.svelte';
	import Screensaver from './Screensaver.svelte';
	import './styles.css';
</script>

<div class="app">
	<!-- <Screensaver /> -->
	
	<Header />

	<main>
		<slot />
	</main>
<!-- 
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
	.app {
		margin: 0;
		overflow: hidden;
		touch-action: none;
		font-family: MyFrida, helvetica;
		color: #fff;
		background-color: #696969;
	}

	/* .app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	} */
</style>
