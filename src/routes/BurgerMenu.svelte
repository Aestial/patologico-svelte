<script lang="ts">
	import die_icon from '$lib/svg/die3d.svg';
	import plus_icon from '$lib/svg/plus.svg';
	import { slide } from 'svelte/transition';

	function reload() {
		location.reload();
	}
	function openMenu() {
		console.log('Doggy menu!');
		//slide.toggle(true):
	}
</script>

<div class="burger-menu">
	<div
		role="button"
		tabindex="0"
		on:click={reload}
		on:keydown={reload}
		aria-label="PANIC!"
		class="menu-button"
	>
		<img src={die_icon} alt="Die button" />
	</div>
	<div
		role="button"
		tabindex="0"
		on:click={openMenu}
		on:keydown={openMenu}
		aria-label="PANIC!"
		class="menu-button"
	>
		<img src={plus_icon} alt="Plus button" />
	</div>
</div>

<style>
	.burger-menu {
		position: fixed;
		left: 10px;
		bottom: 10px;
	}

	.menu-button {
		margin: 10px;
	}

	.menu-button img {
		width: 90px;
		height: 90px;
	}

	@media (max-width: 800px) {
		.burger-menu {
			position: fixed;
			top: 10px;
		}
	}
</style>
