function add_internal_script(name) {
	var s = document.createElement('script');
	s.src = chrome.extension.getURL(name);
	(document.head||document.documentElement).appendChild(s);
	s.onload = function() {
	    s.parentNode.removeChild(s);
	};
}

function add_external_script(url) {
	var s = document.createElement('script');
	s.src = url;
	(document.head||document.documentElement).appendChild(s);
	s.onload = function() {
	    s.parentNode.removeChild(s);
	};
}

function add_external_style(url) {
	var s = document.createElement('link');
	s.rel= "stylesheet";
	s.href= url;
	(document.head||document.documentElement).appendChild(s);
}


for (script of ["//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/highlight.min.js"
	, "//cdnjs.cloudflare.com/ajax/libs/markdown-it/10.0.0/markdown-it.min.js",
	"//code.jquery.com/jquery-3.4.1.min.js"]) {
	add_external_script(script);
}

for (script of ["injected.js"]) {
	add_internal_script(script);
}

add_external_style("//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.1/styles/default.min.css")
