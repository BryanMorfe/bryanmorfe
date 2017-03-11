<?php
/* Require https */

/* Only Enabled when HTTPS is necessary */
/*
if ($_SERVER['HTTPS'] != "on") {
    $url = "https://". $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    header("Location: $url");
    exit;
}
*/
?>
<!doctype html>
<html>
  <head>
   
    <!-- General -->
    <title>Bryan Morfe - Computer Scientist</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" >
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	
  	<!-- Frameworks -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  	
  	<!-- Add Ons -->
  	<link href="https://fonts.googleapis.com/css?family=Yantramanav:100|Catamaran:800|Noto+Sans|Palanquin:100|Raleway:200" rel="stylesheet">
  	
  	<!-- Structure -->
    <link href="/css/structure.css" rel="stylesheet">
    <script src="/js/structure.js"></script>
  	
  	<!-- Page Styling and Scripting -->
  	<link rel="stylesheet" href="css/main.css">
  	<script src="js/main.js"></script>
  	
  </head>

  <body>
 	
 	<!-- Header Content -->
    <header>
  	   
  	   <!-- Main Menu -->
   	   <div class="nav">
         <div class="main-content">
     	   <ul>
      	     <li><a href="/">Home</a></li>
      	     <li><a href="/portfolio">Portfolio</a></li>
      	     <li><a href="/projects">Projects</a></li>
      	     <li><a href="/about-me">About Me</a></li>
      	     <li><a href="/contact">Contact</a></li>
     	   </ul>
     	   <a href="/blog"><button class="btn btn-md btn-action">Blog</button></a>
		   <a href="/downlaods/resume.pdf"><button class="btn btn-md btn-option">Resume</button></a>
         </div>
   	   </div>
   	   
   	 </header>

    <!-- Main Content -->
	<main>

  	  <!-- Welcome Section -->
   	  <div id="welcome-section" class="section clearfix">
       
        <div class="main-content">
        
          <h2 class="section-title">WELCOME</h2>
          
          <!-- Blog Last Post -->
          <div class="card card-flex-9 clickable-card" id="blog">
            <figure class="card-header rounded-header">
              <h2 class="card-header-title"></h2>
            </figure>
            <div class="post-info clearfix"></div>
            <h3 class="card-title"></h3>
            <div class="card-content"></div>
          </div>
          
          <!-- Abstract -->
          <div class="card card-flex-3 clickable-card">
            <img src="imgs/mypic.png" class="profile-img-md">
            <h3 class="card-title" id="about-me-name"></h3>
            <div class="card-content" id="about-me-content"></div>
          </div>
       
        </div>
        
   	  </div>

 	  <!-- Projects Section -->
  	  <div id="projects-section" class="section clearfix">
       
        <div class="main-content" id="projects">
        
          <h2 class="section-title">PROJECTS</h2>
    	  
          <!-- Featured Project -->
          <div class="card card-flex-6 clickable-card">
            <figure class="card-header blue-tinted-header rounded-header">
              <img src="/imgs/ios-development.jpg">
            </figure>
            <h3 class="card-title"></h3>
            <p class="card-content"></p>
            <button class="btn btn-md btn-action card-button">GitHub</button>
          </div>
          
          <!-- Secondary Project -->
          <div class="card card-flex-3 clickable-card">
            <figure class="card-header green-tinted-header rounded-header">
              <img src="/imgs/ios-developer.jpg">
            </figure>
            <h3 class="card-title"></h3>
            <p class="card-content"></p>
          </div>
          
          <!-- Terciary Project -->
          <div class="card card-flex-3 clickable-card">
            <figure class="card-header green-tinted-header rounded-header">
              <img src="/imgs/ios-developer.jpg">
            </figure>
            <h3 class="card-title"></h3>
	        <p class="card-content"></p>
          </div>
          
        </div>
        
   	  </div>

 	  <!-- Portfolio Section -->
  	  <div id="portfolio-section" class="section clearfix">
  	  
        <div class="main-content" id="portfolio">
    
          <h2 class="section-title">PORTFOLIO</h2>
          
          <!-- Featured App -->
          <div class="card card-flex-6 clickable-card">
            <figure class="card-header blue-tinted-header rounded-header">
              <img src="/imgs/ios-development.jpg">
            </figure>
            <h3 class="card-title"></h3>
	        <p class="card-content"></p>
            <button class="btn btn-md btn-option card-button">Download</button>
          </div>
          
          <!-- Secondary App -->
          <div class="card card-flex-3 clickable-card">
            <figure class="card-header green-tinted-header rounded-header">
              <img src="imgs/ios-developer.jpg">
            </figure>
            <h3 class="card-title"></h3>
	        <p class="card-content"></p>
          </div>
          
          <!-- Terciary App -->
          <div class="card card-flex-3 clickable-card">
            <figure class="card-header green-tinted-header rounded-header">
              <img src="/imgs/ios-developer.jpg">
            </figure>
            <h3 class="card-title"></h3>
	        <p class="card-content"></p>
	      </div>
	    </div>
     
      </div>

    </main>
  
    <!-- Footer Content -->
  	<footer id="footer">
  	
  	  <div class="main-content">
       
        <!-- Footer Navigation -->
        <div class="clearfix footer-nav">
    	  
          <!-- Page Navigator -->
          <div class="footer-menu">
            <h4 class="footer-menu-title">MAIN MENU</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/about-me">About Me</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
    
          <!-- Personal Docs and Pages -->
          <div class="footer-menu">
            <h4 class="footer-menu-title">PERSONAL</h4>
            <ul>
              <li><a href="/downloads/resume.pdf">Resume</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
    
          <!-- Community -->
          <div class="footer-menu">
            <h4 class="footer-menu-title">COMMUNITY</h4>
            <ul>
              <li><a href="http://innercircle.bryanmorfe.com">Inner Circle</a></li>
              <li><a href="/contact?contribute=yes">Become a Contributor</a></li>
              <li><a href="/contact?network=yes">Are you a developer? Let's Network</a></li>
            </ul>
          </div>
     
        </div>
        
        <!-- Social Media Links -->
        <ul class="social-media">
  	      <li><a href="https://www.linkedin.com/in/bryan-morfe-911277127/" target="_blank"><img class="social-media-img" src="/imgs/Linkedin.png" alt="LinkedIn"></a></li>
  	      <li><a href="https://github.com/BryanMorfe/" target="_blank"><img class="social-media-img" src="/imgs/GitHub.png" alt="GitHub"></a></li>
  	      <li><a href="https://twitter.com/bryanmorfe" target="_blank"><img class="social-media-img" src="/imgs/Twitter.png" alt="Twitter"></a></li>
  	      <li><a href="https://instagram.com/bryanmorfe" target="_blank"><img class="social-media-img" src="/imgs/Instagram.png" alt="Instagram"></a></li>
  	      <li><a href="https://plus.google.com/u/1/+brzrtEvolucionMusical" target="_blank"><img class="social-media-img" src="/imgs/Google+.png" alt="Google+"></a></li>
  	    </ul>
  	    
  	    <!-- Copyrights -->
  	    <p id="copy">Copyright &copy; 2017 Bryan Morfe. All rights reserved.</p>
  	    
  	  </div>
  	  
  	</footer>
  
  </body>
 
</html>
