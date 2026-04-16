<script lang="ts">
	import { about } from '../data/about';
	import { contact } from '../data/contact';
	import { skills } from '../data/skills';

	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{about.name} // SYSTEM_VIEW</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="pixel-root">
	
	<!-- ════════ NAME CARD ════════ -->
	<header class="card-obj name-card" style="top: 30px; left: 60px; transform: rotate(-2deg); z-index: 10;">
		<div class="card-header">[ ID_USER ]</div>
		<div class="card-body">
			<h1 class="main-title">{about.name.toUpperCase()}</h1>
			<p class="sub-line">{about.profession.toUpperCase()} // SINCE {year}</p>
		</div>
		<div class="black-shadow"></div>
	</header>

	<!-- ════════ BIO CARD: JELAS BANGET ════════ -->
	<section class="card-obj bio-card" style="top: 150px; left: 40px; transform: rotate(1deg); z-index: 5;">
		<div class="card-header highlight"> [ BIO_LOG ] </div>
		<div class="card-body">
			<p class="main-bio-text">
				"{about.bio}"
			</p>
			<div class="bio-footer-line">
				LOC: {about.location} | VER: {year}.1
			</div>
		</div>
		<div class="black-shadow"></div>
	</section>

	<!-- ════════ SKILLS CARD ════════ -->
	<section class="card-obj skill-card" style="top: 220px; right: 50px; transform: rotate(-1deg); z-index: 8;">
		<div class="card-header"> [ SKILLS.SYS ] </div>
		<div class="card-body">
			<div class="skill-stack">
				{#each skills.languages as s}
					<div class="skill-tag">{s.name}</div>
				{/each}
				{#each skills.frameworks as s}
					<div class="skill-tag black-tag">{s.name}</div>
				{/each}
			</div>
			<div class="tools-mini">
				Tools: {skills.toolsAndUI.map(t => t.name).join(' / ')}
			</div>
		</div>
		<div class="black-shadow"></div>
	</section>

	<!-- ════════ CONTACT CARD: NO HOVER, JELAS ════════ -->
	<section class="card-obj contact-card" style="bottom: 100px; left: 30%; transform: rotate(2deg); z-index: 12;">
		<div class="card-header"> [ CONTACT_ME ] </div>
		<div class="card-body">
			<div class="contact-links">
				<a href="mailto:{contact.email}" class="link-bold">{contact.email}</a>
				<a href="{contact.github}" target="_blank" class="link-bold">GITHUB.COM/{about.name.split(' ')[0]}</a>
				<div class="phone-data">TELEX: {contact.phone}</div>
			</div>
		</div>
		<div class="black-shadow"></div>
	</section>

	<!-- BACKGROUND PIXELS -->
	<div class="bg-px decor-1">█▒░</div>
	<div class="bg-px decor-2">░▒█</div>

	<footer class="system-footer">
		MARQUEE MODE: {about.name.toUpperCase()} // STATUS: READY // {year} // {about.location}
	</footer>
</div>

<style>
	/* RESET */
	:global(body) {
		margin: 0;
		padding: 0;
		background-color: #dcd3b6;
	}

	.pixel-root {
		font-family: 'VT323', monospace;
		color: #000000;
		height: 100vh;
		width: 100vw;
		position: fixed;
		overflow: hidden;
		background-image: radial-gradient(#000 1px, transparent 1px);
		background-size: 30px 30px;
		background-color: #dcd3b6;
	}

	/* CARD BASE */
	.card-obj {
		position: absolute;
		background-color: #ffffff; /* PASTI PUTIH */
		border: 4px solid #000000; /* PASTI HITAM */
		min-width: 300px;
		max-width: 500px;
	}

	.card-header {
		background-color: #000000;
		color: #ffffff;
		padding: 4px 12px;
		font-family: 'Press Start 2P', cursive;
		font-size: 10px;
		letter-spacing: 1px;
	}

	.card-header.highlight {
		background-color: #444;
	}

	.card-body {
		padding: 20px 25px;
		background-color: #ffffff; /* DOUBLE CHECK BACKGROUND */
	}

	/* SHADOW PEKAT DI BELAKANG */
	.black-shadow {
		position: absolute;
		top: 12px;
		left: 12px;
		width: 100%;
		height: 100%;
		background-color: #000000;
		z-index: -2;
	}

	/* TEXT STYLES */
	.main-title {
		font-family: 'Press Start 2P', cursive;
		font-size: 20px;
		margin: 0 0 10px 0;
		color: #000;
	}

	.sub-line {
		font-family: 'Press Start 2P', cursive;
		font-size: 8px;
		color: #555;
		margin: 0;
	}

	.main-bio-text {
		font-size: 34px;
		line-height: 1;
		color: #000;
		margin: 0 0 15px 0;
		font-weight: bold;
	}

	.bio-footer-line {
		border-top: 2px solid #000;
		padding-top: 10px;
		font-weight: bold;
		font-size: 1.4rem;
	}

	.skill-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 12px;
	}

	.skill-tag {
		border: 2px solid #000;
		padding: 4px 8px;
		font-weight: bold;
		font-size: 1.2rem;
		background: #f0f0f0;
		color: #000;
	}

	.skill-tag.black-tag {
		background: #000;
		color: #fff;
	}

	.tools-mini {
		font-family: 'Press Start 2P', cursive;
		font-size: 7px;
		color: #666;
		margin-top: 10px;
	}

	/* CONTACTS */
	.contact-links {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.link-bold {
		color: #000;
		font-size: 1.8rem;
		font-weight: 900;
		text-decoration: none;
		border-bottom: 4px solid #000;
		width: fit-content;
	}

	.link-bold:hover {
		background: #000;
		color: #fff;
	}

	.phone-data {
		font-family: 'Press Start 2P', cursive;
		font-size: 7px;
		color: #000;
		margin-top: 5px;
	}

	/* DECOR */
	.bg-px { position: absolute; font-size: 5rem; opacity: 0.1; pointer-events: none; }
	.decor-1 { top: 10%; right: 10%; }
	.decor-2 { bottom: 15%; left: 5%; }

	.system-footer {
		position: absolute;
		bottom: 0; width: 100%;
		background-color: #000;
		color: #fff;
		padding: 10px;
		font-family: 'Press Start 2P', cursive;
		font-size: 8px;
		text-align: center;
	}

	@media (max-width: 600px) {
		.card-obj { position: relative !important; top: 0 !important; left: 0 !important; transform: none !important; margin: 40px auto !important; width: 90%; }
		.pixel-root { overflow-y: auto; position: relative; height: auto; min-height: 100vh; }
	}
</style>
