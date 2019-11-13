
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
	<title>Assignment 3</title>
	<link href="a3.html" rel="stylesheet" type="text/css" />
    <script type="text/javascript" src="scripts.js"></script>
</head>

<body>

var slideIndex = 0;
carousel();

function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1}
x[slideIndex-1].style.display = "block";
setTimeout(carousel, 2000); // Change image every 2 seconds
}

</body>

</html>
