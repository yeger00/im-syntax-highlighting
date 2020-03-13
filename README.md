# IM Syntax Highlighting
A chrome extension that adds syntax highlighting for instant messaging web apps.

![](screenshot.png/?raw=true)

## Instant messaging support
Currently supports the following:
1. [whatsapp](https://web.whatsapp.com)
1. [google chat](https://chat.google.com)
1. [telegram](https://web.telegram.com)

## How to install
Since the Google Chrome App is going to be [deperacated](https://blog.chromium.org/2020/01/moving-forward-from-chrome-apps.html), the only way to install is via development mode.

* Clone the repository
```
git clone https://github.com/yeger00/im-syntax-highlighting.git
```

* Open Chrome
* Go to the Chrome Extensions page (`chrome://extensions/`)
* Click on `Load unpacked`
* Choose the `im-syntax-highlighting` directory

## How to use
Send code in regular Markdown syntax
```
	```javascript
	function func() {
		return 1;
	}
	```
```
