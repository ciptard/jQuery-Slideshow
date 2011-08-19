<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> 
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>My awesom Slideshow</title>
<link href="style.css" rel="stylesheet" type="text/css" title="Normal" />
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script type="text/javascript" src="slideshow.js"></script>
</head>
<body>
	<ul id="slideshow">
		
                <!-- List with images -->
                <li class="slideshow-current"><a href="#">
			<img src="s1.jpg" title="Title 1" alt="Short description 1"/>
		</a></li>
		<li><a href="#">
			<img src="s2.jpg" title="Title 2" alt="Short description 2"/>
		</a></li>
		<li><a href="#">
			<img src="s3.jpg" title="Title 3" alt="Short description 3"/>
		</a></li>

                <li class="slideshow-container">
                    <div class="slideshow-caption">
                        <h3></h3>
                        <p></p>
                    </div>
                </li>
	</ul>

        <h1 id="error"></h1>
</body>
</html>