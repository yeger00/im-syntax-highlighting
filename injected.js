md = null;
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

WHATSAPP_SELECTOR = "code[data-app-text-template]"
GOOGLE_CHAT_SELECTOR = ".FMTudf"

function backtick_to_markdown() {
	if (flag) {
		return;
	}
	$(WHATSAPP_SELECTOR).each(function(index) {
		if (!$( this ).attr("md")) {
			$( this ).html(md.render("```" + $(this).text() + "\n```"));
			$( this ).attr("md", "true");
		}
	});
}

window.addEventListener("load", function() {
	hljs.initHighlightingOnLoad();
	init_md();
	setInterval(backtick_to_markdown, 3000);
});
