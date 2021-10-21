const cryptoCoffeeWidgetScript = document.querySelector('script[data-name="crypto-coffee-widget"');
window.addEventListener('DOMContentLoaded', () => {
    // Creating the button to be visible on the screen to be visible on first load
    const widgetButton = document.createElement('div');
    widgetButton.id = 'crypto-coffee-btn';
    widgetButton.style.display = "flex";
    widgetButton.style.alignItems = 'center';
    widgetButton.style.justifyContent = 'center';
    widgetButton.style.width = "64px";
    widgetButton.style.height = "64px";
    widgetButton.style.background = cryptoCoffeeWidgetScript.dataset.color;
    widgetButton.style.color = "white";
    widgetButton.style.borderRadius = "32px";
    widgetButton.style.position = "fixed";
    cryptoCoffeeWidgetScript.dataset.position === "left" ? widgetButton.style.left = cryptoCoffeeWidgetScript.dataset.x_margin + "px" : widgetButton.style.right = cryptoCoffeeWidgetScript.dataset.x_margin + "px";
    widgetButton.style.bottom = cryptoCoffeeWidgetScript.dataset.y_margin + "px";
    widgetButton.style.boxShadow = '0 4px 8px rgba(0; 0, 0, 0.4)';
    widgetButton.style.zIndex = '9999';
    widgetButton.style.cursor = 'pointer';
    widgetButton.style.fontWeight = '600';
    widgetButton.style.transition = 'all .2s ease';

    widgetButton.innerHTML = '<img src="https://raw.githubusercontent.com/gist/shindeajinkya/a6d782f79eaa945bd5f2a15cbd9af8e9/raw/99af9678cfa6e706162d83a95effdd4d454bc643/cryptocoffeelogo.svg" alt="Buy Me A Crypto Coffee" style="height: 40px; width: 40px; margin: 0; padding: 0;">';

    const t = document.createElement("div")
    t.style.position = "fixed";
    t.style.top = "0";
    t.style.left = "0";
    t.style.width = "0";
    t.style.height = "0";
    t.style.background = "rgba(0, 0, 0, 0)";
    t.style.textAlign = "center";
    t.style.zIndex = "99999";

    const iframeToLoadCryptoCoffee = document.createElement('iframe');

    iframeToLoadCryptoCoffee.title = "Buy Me a Crypto Coffee";
    iframeToLoadCryptoCoffee.style.position = "fixed";
    iframeToLoadCryptoCoffee.style.margin = "0";
    iframeToLoadCryptoCoffee.style.border = "0";
    cryptoCoffeeWidgetScript.dataset.position == "left" ? iframeToLoadCryptoCoffee.style.left = cryptoCoffeeWidgetScript.dataset.x_margin + "px" : iframeToLoadCryptoCoffee.style.right = cryptoCoffeeWidgetScript.dataset.x_margin + "px";
    iframeToLoadCryptoCoffee.style.bottom = parseInt(cryptoCoffeeWidgetScript.dataset.y_margin, 10) + 80 + "px";
    iframeToLoadCryptoCoffee.style.height = "0";
    iframeToLoadCryptoCoffee.style.opacity = "0";
    iframeToLoadCryptoCoffee.style.width = "calc(100% - 38px)";
    iframeToLoadCryptoCoffee.style.maxWidth = "350px";
    iframeToLoadCryptoCoffee.style.borderRadius = "10px";
    iframeToLoadCryptoCoffee.style.boxShadow = "-6px 0px 30px rgba(13, 12, 34, 0.1)";
    iframeToLoadCryptoCoffee.style.background = "#fff";
    iframeToLoadCryptoCoffee.style.backgroundImage = "url(https://user-images.githubusercontent.com/51527913/138300448-23b75e7b-e7d5-4e66-b8ee-8d57ccbc997d.gif)";
    iframeToLoadCryptoCoffee.style.backgroundPosition = "center bottom";
    iframeToLoadCryptoCoffee.style.backgroundSize = "256px";
    iframeToLoadCryptoCoffee.style.backgroundRepeat = "no-repeat";
    iframeToLoadCryptoCoffee.style.zIndex = "999999";
    iframeToLoadCryptoCoffee.style.transition = "all .4s ease";
    iframeToLoadCryptoCoffee.style.maxHeight = "430px";

    const a = document.createElement('div');

    a.style.position = "fixed";
    cryptoCoffeeWidgetScript.dataset.position == "left" ? a.style.left = parseInt(cryptoCoffeeWidgetScript.dataset.x_margin, 10) + 84 + "px" : a.style.right = parseInt(cryptoCoffeeWidgetScript.dataset.x_margin, 10) + 84 + "px";
    a.style.bottom = parseInt(cryptoCoffeeWidgetScript.dataset.y_margin, 10) - 2 + "px";
    a.style.background = "#ffffff";
    a.style.zIndex = "9999";
    a.innerText = cryptoCoffeeWidgetScript.dataset.message;
    a.style.boxShadow = "-6px 0px 30px rgba(13, 12, 34, 0.1)";
    a.style.padding = "23px 24px";
    a.style.borderRadius = "4px";
    a.style.fontSize = "18px";
    a.style.color = "#0D0C22";
    a.style.width = "auto";
    a.style.maxWidth = "260px";
    a.style.lineHeight = "1.5";
    a.style.display = "none";
    a.style.opacity = "0";

    document.body.appendChild(t);
    t.appendChild(iframeToLoadCryptoCoffee);
    document.body.appendChild(widgetButton);
    document.body.appendChild(a);

    let s = 0;

    widgetButton.onclick = function() {
        s || (iframeToLoadCryptoCoffee.src = `https://app.buymeacryptocoffee.xyz/widget/${cryptoCoffeeWidgetScript.dataset.userid}`);
        s++;
        a.style.display = "none";
        a.style.opacity = "0";
        t.style.width = "100%";
        t.style.height = "100%";
        iframeToLoadCryptoCoffee.style.height = "calc(100% - 140px)";
        iframeToLoadCryptoCoffee.style.opacity = "1";
        widgetButton.style.transform = "scale(.8)";
        widgetButton.innerHTML = '<svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.1133 0L8 6.11331L1.88669 0L0 1.88663L8 9.88663L16 1.88663L14.1133 0Z" fill="white"/></svg>';
    };

    widgetButton.onmouseover = function() {};
    
    widgetButton.onmouseleave = function() {
        a.style.display = "none";
        a.style.opacity = "0";
    };

    t.onclick = function() {
        t.style.width = "0";
        t.style.height = "0";
        iframeToLoadCryptoCoffee.style.height = "0";
        iframeToLoadCryptoCoffee.style.opacity = "0";
        widgetButton.style.transform = "scale(1)";
        widgetButton.innerHTML = '<img src="https://raw.githubusercontent.com/gist/shindeajinkya/a6d782f79eaa945bd5f2a15cbd9af8e9/raw/99af9678cfa6e706162d83a95effdd4d454bc643/cryptocoffeelogo.svg" alt="Buy Me A Crypto Coffee" style="height: 40px; width: 40px; margin: 0; padding: 0;">';
    };

})