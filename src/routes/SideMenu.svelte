<script lang="ts">
	import camisa_icon from '$lib/svg/camisa.svg';
	import corbata_icon from '$lib/svg/corbata.svg';
	import left_icon from '$lib/svg/left.svg';
	import right_icon from '$lib/svg/right.svg';
	import rombo_icon from '$lib/svg/rombo.svg';
	
	function reload() {
		location.reload();
	}
	function onNextShirt() {
		console.log('Next button shirt');
	}
	function onPrevShirt() {
		console.log('Prev button shirt');
	}
</script>

<!-- Side Menu -->
<ul id="slide-out" class="side-nav">
	<div class="side-menu">
		<div class="side-option">
			<div class="option-container">
				<div role="button" tabindex="0" on:click={onPrevShirt} on:keydown={onPrevShirt} aria-label="PANIC!" class="button"><img src={left_icon} alt="left button"/></div>
				<div class="icon"><img src={camisa_icon} alt="shirt icon"/></div>
				<div role="button" tabindex="0" on:click={onNextShirt} on:keydown={onNextShirt} aria-label="PANIC!" class="button"><img src={right_icon} alt="right button"/></div>
			</div>
		</div>
		<div class="side-option">
			<div class="option-container">
				<div class="button"><img onclick="pato.option(1,false) " src={left_icon} /></div>
				<div class="icon"><img src={corbata_icon} /></div>
				<div class="button"><img onclick="pato.option(1,true) " src={right_icon} /></div>
			</div>
		</div>
		<div class="side-option">
			<div class="option-container">
				<div class="button"><img onclick="pato.option(2,false) " src={left_icon} /></div>
				<div class="icon"><img src={rombo_icon} /></div>
				<div class="button"><img onclick="pato.option(2,true) " src={right_icon} /></div>
			</div>
		</div>
		<div class="side-option">
			<div class="option-container">
				<div class="button"><img onclick="pato.option(3,false) " src={left_icon} /></div>
				<div id="background-icon" class="icon"></div>
				<div class="button"><img onclick="pato.option(3,true) " src={right_icon} /></div>
			</div>
		</div>
	</div>
</ul>
<!-- Side Menu Actor -->
<a href="#" data-activates="slide-out" class="button-collapse"></a>

<style>
	.side-nav {
		color: #fff;
		background-color: rgba(5, 5, 5, 0.85);
	}
	#sidenav-overlay {
		/* background-color: rgba(0, 0, 0, 0.13); */
		background-color: transparent;
	}
	.side-menu {
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.side-option {
		margin-top: 25px;
		margin-bottom: 25px;
	}
	.option-container {
		text-align: center;
	}
	.icon {
		display: inline-block;
		margin: 3px;
	}
	.icon img {
		display: block;
		margin: auto;
		width: 70px;
		height: 70px;
	}
	.button {
		display: inline-block;
		transform: translateY(-55%);
		margin: 6px;
	}
	.button img {
		width: 35px;
		height: 35px;
	}
	#background-icon {
		width: 30px;
		height: 50px;
	}
</style>
