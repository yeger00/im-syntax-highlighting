md = null;
selector = null;
flag = false;

function init_md() {
	md = window.markdownit({
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					return hljs.highlight(lang, str).value;
				} catch (__) {}
			}
			return ''; // use external default escaping
		}
	});
}

function init_selector() {
	if (window.location.hostname.includes("whatsapp")) {
		selector = "code[data-app-text-template]"
	} else if (window.location.hostname.includes("chat.google")) {
		selector =".FMTudf";
	} else if (window.location.hostname.includes("telegram")) {
		selector ="code";
	}
}

function backtick_to_markdown() {
	if (flag) {
		return;
	}
	if (!selector) {
		return;
	}
	$(selector).each(function(index) {
		if (!$( this ).attr("md") && 
			(!$( this ).attr("class") ||
			!$( this ).attr("class").startsWith("language-"))) {
			$( this ).html(md.render("```" + $(this).text() + "\n```"));
			$( this ).attr("md", "true");
		}
	});
}

window.addEventListener("load", function() {
	init_selector();
	hljs.initHighlightingOnLoad();
	init_md();
	setInterval(backtick_to_markdown, 3000);
});
