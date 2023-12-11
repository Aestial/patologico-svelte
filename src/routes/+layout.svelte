<script lang="ts">
	import '../math.extensions';
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
</style>
