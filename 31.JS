document.head.innerHTML += "<style>body{display:none}</style>";
window.onerror = function(message, url, lineNumber) {return true;}
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = '';document.body.style.display = "block";document.body.innerHTML = '<input type="button" onclick="alert(123)" value="Cool">' }, 100);
