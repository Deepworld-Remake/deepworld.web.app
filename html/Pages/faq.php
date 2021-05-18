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
	<title>Frequently Asked Questions</title>
	<meta name="title" content="Example Page">
	<meta name="description" content="Main website for my Projects and Portfolio">
	<meta name="theme-color" content="#ffffff">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:title" content="Example Page">
	<meta property="og:description" content="Main website for my Projects and Portfolio">
	<meta property="og:image" content="../Images/D.png">

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:title" content="Example Page">
	<meta property="twitter:description" content="Main website for my Projects and Portfolio">
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
			<h1>Frequently Asked Questions</h1>
			<p>Suggest / Ask for more in the discord (Contact Page)</p>
			<br>
		</div>
	</header>
	<div class="container features">
		<div class="row">
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">Offline Mode? Multiplayer?</h3>
				<p>
                Deepworld Remastered will start off offline. The game will proceed in development until it is stable.
                Once that is achieved, dedicated servers will be considered.
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">Player-Data and Anticheats?</h3>
				<p>
					Player and World data will be stored offline in .dwd and .dww files. Simple binary files. Anticheats are
					not planned at the moment, atleast for singleplayer. Multiplayer is far from ready.
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">The Universe and Worlds System?</h3>
				<p>
					Each "Universe" is just like the original deepworld. Each Universe you join has many worlds, and each
					universe has a Character or Player.
					Every single universe you join is different. Differnt worlds, different inventories, different skills /
					levels, different ranks, different clothing.
					The only thing that is the same across universes, is your Order of the Sun AND Eye rank, your Player
					Name, your Leaderboard Data and your Friends List.
					Your "Friends List" is the disabled "Offline" tab ingame. Currently multiplayer does not function, so it
					doesnt do anything.
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">What is "The Order of the Sun"</h3>
				<p>
					The "Order of the Sun" is a new order that was never implemented into the original game. Your rank in
					the Order of the Sun is completely dependent on your time playing the game.
					To enter the order of the sun (Iron), you must play the game for 2 hours straight without logging off.
					Dedicated. Brass? You must have 24 hours of total play time. Sapphire?
					At least play the game for more than a month. Ruby? 168 hours of ingame time spent playing... A week
					basically.
					Finally, Onyx? You must have played more than 6 months on deepworld. Half a year of existing. Thisll take a while.
				</p>
			</div>
			<div class="col-lg-4 col-md-4 col-sm-12">
				<h3 class="feature-title">Mobile? iOS / Android? Mac?</h3>
				<p>
					Well mac and windows versions do already exist. There are also plans on setting up a Linux build
					too. As for mobile... iOS and Android? They <b>will</b> be supported. They are planned to be released alongside the
					release 1.0 update. As for how they will function and be different?
					The mobile versions will still be able to do all the things you can do on PC. When multiplayer is
					setup.. you will be able to join servers on mobile.
				</p>
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
	loadWebLinks(".navbar-nav", "..", "faq");
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