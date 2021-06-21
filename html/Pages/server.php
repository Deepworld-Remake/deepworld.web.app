<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="../Icons/ms-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="57x57" href="../Icons/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="../Icons/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="../Icons/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="../Icons/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="../Icons/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="../Icons/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="../Icons/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="../Icons/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="../Icons/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192" href="../Icons/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="../Icons/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="../Icons/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="../Icons/favicon-16x16.png">

	<!-- Primary Meta Tags -->
	<title>Deepworld Server</title>
	<meta name="title" content="Deepworld Private Server">
	<meta name="description" content="A WIP private server which runs alongside the original version of deepworld">
	<meta name="theme-color" content="#ffffff">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="Deepworld Private Server">
	<meta property="og:description" content="A WIP private server which runs alongside the original version of deepworld">
	<meta property="og:image" content="../Images/D.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:title" content="Deepworld Private Server">
	<meta property="twitter:description" content="A WIP private server which runs alongside the original version of deepworld">
	<meta property="twitter:image" content="../Images/D.png">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
		integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
	<style>

	</style>
	<link rel="stylesheet" href="../Stylesheets/index.css">
</head>

<body>
	<nav class="navbar navbar-expand-md">
		<a class="navbar-brand" href="/">
			<img src="../Images/D.png" alt="" height="30px">
		</a>
		<button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#main-navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="main-navigation">
			<ul class="navbar-nav">
				<!-- URL Paths will be generated here -->
			</ul>
		</div>
	</nav>
	<header class="page-header header container-fluid"> 
		<div class="overlay"></div>
		<div class="description">
			<h1>Deepworld Private Server</h1>
			<p>A Work in Progress Private Server for the original Deepworld game</p>
			<p>This server works alongside the original deepworld game, instructions for downloading and using it below.</p>
			<p>The "Brainwine" server software is Developed by Dennis, and is Hosted and Maintained by SirCode</p>
		</div>
	</header>
	<div class="container features">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">What is this about?</h3>
				<p>
					This is private server software, meaning that it connects alongside the original game.
					Essentially, youll be able to play and interact with the game again, without using entirely new software.
					Its very WIP at the moment.
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">Connecting via PC?</h3>
				<span>
					<h5>Want to connect to my server?</h5>
					Download this DLL: <br>
					<a href="https://github.com/Deepworld-Remake/Deepworld-Server-Resources/raw/main/Custom/Assembly-CSharp.dll">Assembly-CSharp.dll</a><br>
					This DLL is used by deepworld to attach a custom API and Gateway. (My server) <br><br>
					<h5>Want to connect to a custom server?</h5>
					You'll want to download this DLL: <br>
					<a href="https://github.com/Deepworld-Remake/Deepworld-Server-Resources/raw/main/Universal/Assembly-CSharp.dll">Assembly-CSharp.dll (Universal)</a><br>
					After you've downloaded that, you'll need to download and edit this registry script: <br>
					<a href="https://github.com/Deepworld-Remake/Deepworld-Server-Resources/raw/main/Universal/Registry Script.reg">Registry Script.reg (Universal)</a><br>
					Edit the file in a text editor, replace the IP and Port with a custom server address, then run the script. Simple as that. 
					This will only work with custom servers.<br><br>
					<h5>Using the DLL(s)?</h5>
					<b>After you've downloaded either DLL above:</b> Go to your installation of deepworld, go into the <b>Deepworld_Data\Managed</b> folder,
					and replace Assembly-CSharp.dll with the one you downloaded. <br>
					The next time you run deepworld, it should take effect. For custom servers, it will only work if you have a valid IP and Port.
				</span>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">Connecting via iOS?</h3>
				<span>
					<h5>Want to connect to my server?</h5>
					Download this IPA: <br>
					<a href="https://github.com/Deepworld-Remake/Deepworld-Server-Resources/raw/main/Custom/Deepworld-SirCodeServer.ipa">Deepworld-SirCodeServer.ipa</a><br>
					You need this custom built app to play on the private server.<br><br>
					<h5>What next?</h5>
					You'll want to sideload the app onto your iphone or ipad<br>
					Currently we've found that only Sideloadly can do it, other sideloaders can't seem to handle deepworld. <br>
					You can download Sideloadly from these links: <br>
					<a href="https://armconverter.com/sideloadly/SideloadlySetup64.exe">Windows 7/8/10 x64</a> <br>
					<a href="https://armconverter.com/sideloadly/SideloadlySetup32.exe">Windows 7/8/10 x32</a> <br>
					<a href="https://armconverter.com/sideloadly/SideloadlySetup.dmg">MacOS 10.12 or higher (M1 Supported)</a> <br>
					Or get it from the official page if you don't trust my direct links: <br>
					<a href="https://iosgods.com/topic/130167-windowsmacosm1ios-15-introducing-sideloadly-working-cydia-impactor-alternative/#comments">Sideloadly iOSGods</a> <br><br>
					<h5>How do I use sideloadly?</h5>
					After you downloaded it, check the first two options in the advanced settings: <br>
					<img src="../Images/server/tutorialOneCut.png" class="img-fluid">
				</span>
			</div>
		</div> 
	</div>
	<footer class="page-footer">
		<div class="footer-copyright text-center">Copyright © 2021</div>
		<div class="footer-copyright text-center">Owned and Distributed by Taylor S</div>
	</footer>
</body>
<script src="../Javascript/template.js"></script>
<script>
	loadWebLinks(".navbar-nav", "..", "server");
</script>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
	integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous">
</script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
	integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous">
</script>
</html>
