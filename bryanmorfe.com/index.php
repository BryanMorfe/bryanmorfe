<?php
$url_path = "/bryanmorfe/bryanmorfe.com"
?>
<!doctype html>
<html>
	<head>
  		<title>Bryan Morfe - Computer Scientist</title>
  		<link href="css/structure.css" rel="stylesheet">
  		<link href="https://fonts.googleapis.com/css?family=Assistant:300|Catamaran:800|Noto+Sans|Palanquin:100|Raleway:200" rel="stylesheet">
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  		<script src="js/structure.js"></script>
  		<link rel="stylesheet" href="css/main.css">
 	</head>

 	<body>
 		
  		<header>
   			<div class="nav">
    			<div class="main-content">
     				<ul>
      					<li><a href="#">Home</a></li>
      					<li><a href="#">Portfolio</a></li>
      					<li><a href="#">Projects</a></li>
      					<li><a href="#">About Me</a></li>
      					<li><a href="#">Contact</a></li>
     				</ul>
     				<button class="btn btn-md btn-action">Blog</button>
     				<button class="btn btn-md btn-option">Resume</button>
    			</div>
   			</div>
  		</header>

  		<main>

   			<div id="welcome-section" class="clearfix">
    			<div class="main-content">
     				<h2 class="section-title">WELCOME</h2>
     				<div class="card card-flex-9 clickable-card">
      					<img src="imgs/mypic.png" class="profile-img-lg">
      					<h3 class="card-title" id="blog-title"></h3>
      					<div class="card-content" id="blog-content"></div>
     				</div>
     				<div class="card card-flex-3 clickable-card">
      					<img src="imgs/mypic.png" class="profile-img-md">
      					<h3 class="card-title">Bryan Morfe</h3>
      					<p class="card-content">I am...</p>
     				</div>
    			</div>
   			</div>

  			<div id="projects-section" class="clearfix">
    			<div class="main-content">
     				<h2 class="section-title">PROJECTS</h2>
     				<div class="card card-flex-6 clickable-card">
      					<figure class="card-header blue-tinted-header rounded-header">
       						<img src="imgs/ios-development.jpg">
      					</figure>
      					<h3 class="card-title">iOS Development</h3>
      					<p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It appears more and more people are harnessing the power of mobile development, especially now that Apple's new programming language is gaining popularity.</p>
     				</div>
     				<div class="card card-flex-3 clickable-card">
      					<figure class="card-header green-tinted-header rounded-header">
       						<img src="imgs/ios-developer.jpg">
      					</figure>
      					<h3 class="card-title">iOS Development</h3>
      					<p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It appears more and more people are harnessing the power of mobile development, especially now that Apple's new programming language is gaining popularity.</p>
     				</div>
     				<div class="card card-flex-3 clickable-card">
      					<figure class="card-header green-tinted-header rounded-header">
       						<img src="imgs/ios-developer.jpg">
      					</figure>
      					<h3 class="card-title">iOS Development</h3>
      					<p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It$
     				</div>
    			</div>
   			</div>

  			<div id="portfolio-section" class="clearfix">
    <div class="main-content">
     <h2 class="section-title">PORTFOLIO</h2>
     <div class="card card-flex-6 clickable-card">
      <figure class="card-header blue-tinted-header rounded-header">
       <img src="imgs/ios-development.jpg">
      </figure>
      <h3 class="card-title">iOS Development</h3>
      <p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It appears more and more people$
     </div>
     <div class="card card-flex-3 clickable-card">
      <figure class="card-header green-tinted-header rounded-header">
       <img src="imgs/ios-developer.jpg">
      </figure>
      <h3 class="card-title">iOS Development</h3>
      <p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It appears more and more people$
     </div>
     <div class="card card-flex-3 clickable-card">
      <figure class="card-header green-tinted-header rounded-header">
       <img src="imgs/ios-developer.jpg">
      </figure>
      <h3 class="card-title">iOS Development</h3>
      <p class="card-content">iOS Deveplopment has grown exponentially during the year of 2016. It$
     </div>
    </div>
   </div>

  		</main>

  		<footer id="footer">
  			<div class="main-content">
                <div class="clearfix footer-nav">
                  <div class="footer-menu">
                    <h4 class="footer-menu-title">MAIN MENU</h4>
                    <ul>
                      <li><a href="<?php echo $url_path ?>">Home</a></li>
                      <li><a href="<?php echo $url_path ?>/projects">Projects</a></li>
                      <li><a href="<?php echo $url_path ?>/portfolio">Portfolio</a></li>
                      <li><a href="<?php echo $url_path ?>/about-me">About Me</a></li>
                      <li><a href="<?php echo $url_path ?>/contact">Contact</a></li>
                      </ul>
                   </div>
                <div class="footer-menu">
                    <h4 class="footer-menu-title">PERSONAL</h4>
                    <ul>
                      <li><a href="#">Resume</a></li>
                      <li><a href="#">Blog</a></li>
                      </ul>
                    </div>
                    <div class="footer-menu">
                      <h4 class="footer-menu-title">COMMUNITY</h4>
                        <ul>
                          <li><a href="#">Inner Circle</a></li>
                          <li><a href="#">Become a Contributor</a></li>
                          <li><a href="#">Are you an iOS Developer? Let's Network</a></li>
                        </ul>
                    </div>
                  </div>
                </div>
                <ul class="social-media">
  				  	<li><a href="https://www.linkedin.com/in/bryan-morfe-911277127/"><img class="social-media-img" src="imgs/Linkedin.png" alt="LinkedIn"></a></li>
  			  	  	<li><a href="https://github.com/BryanMorfe/"><img class="social-media-img" src="imgs/GitHub.png" alt="GitHub"></a></li>
  				  	<li><a href="https://twitter.com/bryanmorfe"><img class="social-media-img" src="imgs/Twitter.png" alt="Twitter"></a></li>
  				  	<li><a href="https://www.facebook.com/profile.php?id=809519151"><img class="social-media-img" src="imgs/Facebook.png" alt="Facebook"></a></li>
  				  	<li><a href="https://instagram.com/bryanmorfe"><img class="social-media-img" src="imgs/Instagram.png" alt="Instagram"></a></li>
  				 	<li><a href="https://plus.google.com/u/1/+brzrtEvolucionMusical"><img class="social-media-img" src="imgs/Google+.png" alt="Google+"></a></li>
  				</ul>
  				<p id="copy">Copyright &copy; 2017 Bryan Morfe. All rights reserved.</p>
  			</div>
  		</footer>
  
 </body>
 
</html>
