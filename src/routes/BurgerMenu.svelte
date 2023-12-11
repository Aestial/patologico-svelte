<script lang="ts">
	import brush from '$lib/svg/brush.svg';
	import burger from '$lib/svg/burger.svg';
	import diamond from '$lib/svg/diamond.svg';
	import die from '$lib/svg/die-icon.svg';
	import shirt from '$lib/svg/shirt.svg';
	import tie from '$lib/svg/tie.svg';

	enum Tool {
		brush,
		diamond,
		shirt,
		tie
	};

	let expanded = false;
	let tool: Tool = Tool.brush;

	function reload() {
		location.reload();
	};

	function setBrush(){
		setTool(Tool.brush);
	};
	function setDiamond(){
		setTool(Tool.diamond);
	};
	function setShirt(){
		setTool(Tool.shirt);
	};
	function setTie(){
		setTool(Tool.tie);
	};

	function setTool(value: Tool) {
		tool = value;
		console.log(tool);
	};

</script>

<nav>
	<div
		class="toggle-dropdown"
		role="button"
		tabindex="0"
		aria-expanded={expanded}
		aria-haspopup="true"
		aria-label="Burger toggle"
		on:click={() => (expanded = !expanded)}
		on:keydown={() => (expanded = !expanded)}
	>
		<svg viewBox="0 0 420 460" width="120" title="bars">
			<path
				style="opacity:0.50000000000000000;fill:#faf5f1;fill-opacity:1;fill-rule:nonzero;stroke:none"
				d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
			/>
		</svg>
	</div>
	<!--Note we can use class:expanded to bind our "expanded" CSS class to the "expanded" state variable-->
	<!-- <div class="dropdown" class:expanded on:transitionend={focusFirstDropdownLink}> -->
	<div class="dropdown" class:expanded>
		<div
			role="button"
			tabindex="0"
			on:click={setShirt}
			on:keydown={setShirt}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={shirt} alt="Plus button" />
		</div>
		<div
			role="button"
			tabindex="0"
			on:click={setTie}
			on:keydown={setTie}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={tie} alt="Plus button" />
		</div>
		<div
			role="button"
			tabindex="0"
			on:click={setDiamond}
			on:keydown={setDiamond}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={diamond} alt="Plus button" />
		</div>
		<div
			role="button"
			tabindex="0"
			on:click={setBrush}
			on:keydown={setBrush}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={brush} alt="Plus button" />
		</div>
		<div
			role="button"
			tabindex="0"
			on:click={reload}
			on:keydown={reload}
			aria-label="PANIC!"
			class="menu-button"
		>
			<img src={die} alt="Die button" />
		</div>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		left: 20px;
		bottom: 20px;
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

	.menu-button {
		margin-top: 10px;
	}

	.menu-button img {
		width: 76px;
		height: 76px;
	}

	.toggle-dropdown {
		margin-bottom: 10px;
		text-align: center;
		z-index: 1;
		cursor: pointer;
	}

	.toggle-dropdown svg {
		width: 66px;
		height: 48px;
		vertical-align: middle;
	}
</style>
