<script lang="ts">
	import Header from './Header.svelte';
	import Screensaver from './Screensaver.svelte';
	import './styles.css';

	let screensaver : any;

</script>

<div class="app">	
	<Header />

	<main>
		<slot />
	</main>
<!-- 
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->

	<Screensaver  bind:this={screensaver} self={screensaver} time={1500}/>
</div>

<style>
	.app {
		margin: 0;
		overflow: hidden;
		touch-action: none;
		font-family: MyFrida, helvetica;
		color: #fff;
		background-color: rgba(20,20,20,0.5);
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
