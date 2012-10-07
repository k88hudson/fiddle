// This is an example of a live reload snippet, http://livereload.com/
// It will not be functional. Add your own.
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');

// Ok, now inject the rest of everything in the page.
$.ajax({
  url: "../main.html",
  method: "get",
  success: function( data ) {
    document.getElementById( "main" ).innerHTML = data;
    document.getElementById( "html" ).value = data;
  }
});
$.ajax({
  url: "../main.js",
  method: "get",
  success: function( data ) {
    document.getElementById( "js" ).value = data;
  }
});
$.ajax({
  url: "../main.css",
  method: "get",
  success: function( data ) {
    document.getElementById( "css" ).value = data;
  }
});
