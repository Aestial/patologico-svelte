<script lang="ts">
	// import 'forkit/js/forkit.js';
	import ribbon from '$lib/images/ribbon.png';
	import { onMount } from 'svelte';

	onMount(() => {
		
	})
</script>

<div class="forkit">
	<!-- Credits Ribbon -->
	<a
		class="forkit"
		data-text="Créditos"
		data-text-detached="Jala ⇾"
		href="https://github.com/Aestial/Patologico"
		><img
			style="position: absolute; top: 0; right: 0; border: 0;"
			src="{ribbon}"
			alt="Credits"
		/></a
	>
</div>

<style>
	* {
		margin: 0px;
		padding: 0px;

		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	.forkit {
		position: fixed;
		right: 0;
		top: 0;

		width: 200px;
		height: 150px;

		font-family: MyFrida, sans-serif;
		text-decoration: none;
	}
	.forkit .tag {
		display: block;
		height: 30px;
		width: 200px;

		color: #fff;
		background: #000000;
		text-align: center;
		font-size: 13px;
		font-weight: bold;
		line-height: 30px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

		-webkit-transform-origin: 15px 0px;
		-moz-transform-origin: 15px 0px;
		-ms-transform-origin: 15px 0px;
		-o-transform-origin: 15px 0px;
		transform-origin: 15px 0px;
	}
	.forkit .tag:after {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 196px;
		height: 26px;
		margin: 1px;
		border: 2px dotted rgba(255, 255, 255, 0.4);
	}
	.forkit .string {
		display: block;
		height: 1px;
		width: 0px;
		position: absolute;

		background: rgba(0, 0, 0, 0.8);
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);

		-webkit-transform-origin: 0px 0px;
		-moz-transform-origin: 0px 0px;
		-ms-transform-origin: 0px 0px;
		-o-transform-origin: 0px 0px;
		transform-origin: 0px 0px;
	}

	.forkit-curtain {
		position: fixed;
		width: 100%;
		height: 100%;
		top: -100%;
	}
</style>
