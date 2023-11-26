<script lang="ts">
	import nest from '$lib/svg/loading.svg';
</script>

<div class="screensaver">
	<!-- Load Screen -->
	<div id="loading-screen" style="width:100%; height:100%;">
		<div class="logo-container">
			<img class="logo" src="{nest}" alt='Egg in nest' />
		</div>
	</div>
	
	<!-- Audio Player -->
	<div id="audio_player">
		<audio autoplay hidden>
			<source src="src/sounds/quack.mp3" type="audio/mpeg">
			If you're reading this, audio isn't supported.
		</audio>
	</div>
</div>

<style>
	#loading-screen {
	position: absolute;
	background-color: #6f8a91;
	left: 0%;
	top: 0%;
	width: 100%;
	height: 100%;
	z-index: 9999;
	}
	.logo-container {
	position: absolute;
	width: auto;
	top: 45%;
	left: 50%;
	transform: translate(-50%, -50%);
	}
	.logo {
	width: 284px;
	height: 206px;
	}
	.logo:hover {
	-webkit-filter: grayscale(0%) brightness(2000%);
	filter: grayscale(0%) brightness(2000%);
	}
</style>
