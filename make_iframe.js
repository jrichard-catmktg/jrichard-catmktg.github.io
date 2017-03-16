// ----------  Cookie Checking  ---------- //

// checks for "cf_ccheck" cookie (indicates we've already run the redirect)
function checkedCookies() {
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf('redirected') == 0) {
			console.log('already redirected');
			return true;
		}
	}
	console.log('redirecting');
	return false;
}

// checks for iOS and try to enable cookies
(function enableCookies() {
	var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	if (navigator.cookieEnabled && !iOS) {
		if (!checkedCookies()) {
			document.cookie = 'redirected=1'; // set a cookie so we don't run this again
			window.location.replace( 'https://jrichard-catmktg.bitbucket.io/enable_cookies.html');
		}
	}
})();


// make the iframe
(function make_iframe() {
	document.write(unescape('%3Ciframe src="https://jrichard-catmktg.github.io" scrolling="no" frameborder="no" height="100" id="cf_iframe"'
						+ 'style="width:100%;'
						+ '%3E%3C/iframe%3E'));
})();