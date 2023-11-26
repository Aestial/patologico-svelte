<script lang="ts">
	import cross_icon from '$lib/svg/x.svg';
	import title_typo from '$lib/svg/typo/titulo.svg';

	import design_typo from '$lib/svg/typo/diseno.svg';
	import david_typo from '$lib/svg/typo/dr.svg';
	import coding_typo from '$lib/svg/typo/progra.svg';
	import jaime_typo from '$lib/svg/typo/jh.svg';

	import instagram_icon from '$lib/svg/icons/instagram.svg';
	import facebook_icon from '$lib/svg/icons/facebook.svg';
	import github_icon from '$lib/svg/icons/github.svg';
	import linkedin_icon from '$lib/svg/icons/linkedin.svg';
	import twitter_icon from '$lib/svg/icons/twitter.svg';
</script>

<div class="curtain">
	<!-- Credits Curtain: The contents (if there's no contents the ribbon acts as a link) -->
	<div class="forkit-curtain">
		<div class="curtain-container">
			<br>
			<!-- <div class="close-button"><img src={cross_icon} alt="Close button" /></div> -->
			<div class="title">
				<img src={title_typo} alt="PATOLOGICO" width="auto" height="100" />
			</div>
			<div class="cell">
				<h2 class="subtitle">
					<img src={design_typo} alt="Diseño" width="auto" height="32" />
				</h2>
				<h3 class="name">
					<img src={david_typo} alt="David Rosales" width="auto" height="39" />
				</h3>
				<a class="social" target="_blank" href="https://www.instagram.com/4stronomo/"
					><img src={instagram_icon} alt="David-Instagram" /></a
				>
				<a
					class="social"
					target="_blank"
					href="https://www.facebook.com/David-Rosales-106543965030715	"
					><img src={facebook_icon} alt="David-Facebook" /></a
				>
			</div>
			<div class="cell">
				<h2 class="subtitle">
					<img src={coding_typo} alt="Programación" width="auto" height="42" />
				</h2>
				<h3 class="name">
					<img src={jaime_typo} alt="Jaime Hernández" width="auto" height="41" />
				</h3>
				<a class="social" target="_blank" href="https://www.linkedin.com/in/aestial/"
					><img src={linkedin_icon} alt="Jaime-LinkedIn" /></a
				>
				<a class="social" target="_blank" href="https://github.com/Aestial/"
					><img src={github_icon} alt="Jaime-Github" /></a
				>
				<a class="social" target="_blank" href="https://twitter.com/Aestial"
					><img src={twitter_icon} alt="Jaime-Twitter" /></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.forkit-curtain {
		background: rgba(0, 0, 0, 0.5);
		height: 100%;
		left: 0;
		overflow: auto;
		position: fixed;
		text-align: center;
		width: 100%;
		/* z-index: 1000; */
	}
	.curtain-container {
		overflow: auto;
	}
	.forkit-curtain .close-button {
		position: relative;
		text-align: right;
		cursor: pointer;
		margin: 15px 15px 0 0;
	}
	.title {
		font-size: 2.5em;
	}
	.subtitle {
		font-size: 1.6em;
	}
	.name {
		font-size: 1.35em;
	}
	.cell {
		margin: 35px;
	}
	.social {
		width: 45px;
		height: 45px;
	}
	.social img {
		margin: 20px;
		width: inherit;
		height: inherit;
		transition: all 150ms ease-in;
		z-index: 4;
		transform: scale(1);
	}
	.social img:hover {
		transition: all 250ms ease-in;
		z-index: 5;
		transform: scale(2);
	}
</style>
