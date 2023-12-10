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

	<Screensaver  bind:this={screensaver} self={screensaver} time={1500}/>
</div>

<style>
	.app {
		margin: 0;
		overflow: hidden;
		touch-action: none;
	}

	/* 
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
	*/
	
</style>
