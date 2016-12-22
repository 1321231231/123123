document.head.innerHTML += "<style>body{display:none}</style>";
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = '';document.getElementsByTagName('body')[0].innerHTML = '';document.body.innerHTML += '<input type="button" onclick="alert(123)" value="Cool">' }, 2000);
