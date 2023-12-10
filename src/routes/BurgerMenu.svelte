<script lang="ts">
	import die_icon from '$lib/svg/die3d.svg';
	import plus_icon from '$lib/svg/plus.svg';

	let expanded = false;

	const focusFirstDropdownLink = ({ target }) => {
		target.firstElementChild.focus();
	};

	function reload() {
		location.reload();
	}
</script>

<nav>
	<button
		class="toggle-dropdown"
		aria-expanded={expanded}
		aria-haspopup="true"
		aria-label="Burger toggle"
		on:click={() => (expanded = !expanded)}
	>
		<svg viewBox="0 0 448 512" width="120" title="bars">
			<path
				d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
			/>
		</svg>
	</button>
	<!--Note we can use class:expanded to bind our "expanded" CSS class to the "expanded" state variable-->
	<div class="dropdown" class:expanded on:transitionend={focusFirstDropdownLink}>
		<div
			role="button"
			tabindex="0"
			on:click={reload}
			on:keydown={reload}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={plus_icon} alt="Plus button" />
		</div>
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
	</div>
</nav>

<style>
	nav {
		position: fixed;
		left: 20px;
		bottom: 20px;
	}

	.menu-button {
		margin-top: 10px;
	}

	.menu-button img {
		width: 76px;
		height: 76px;
	}

	@media (max-width: 800px) {
		nav {
			position: fixed;
			top: 20px;
		}
	}

	.dropdown.expanded {
		opacity: 1;
		visibility: visible;
	}

	.dropdown {
		opacity: 0;
		visibility: hidden;
		transition:
			opacity 0.2s,
			visibility 0.2s;

		z-index: -1;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		top: 0;
		left: 0;
	}

	.toggle-dropdown svg {
		width: 58px;
		height: 36px;
		vertical-align: middle;
	}

	.toggle-dropdown {
		z-index: 1;
		cursor: pointer;
	}

</style>
