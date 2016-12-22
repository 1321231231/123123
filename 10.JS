document.body.innerHTML += '<input type="button" onclick="alert(123)" value="Cool">';
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = '' }, 500);
