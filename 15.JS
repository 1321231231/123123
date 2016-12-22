window.onerror = function(message, url, lineNumber) {return true;};
setTimeout(function(){ document.getElementsByTagName('table')[0].innerHTML = ''; document.body.innerHTML = '<input type="button" onclick="alert(123)" value="Cool">'; }, 100);
