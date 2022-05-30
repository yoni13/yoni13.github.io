var browserName = (function (agent) {
    switch (true) {
        case agent.indexOf("edge") > -1: return "MS Edge";
        case agent.indexOf("edg/") > -1: return "Edge (chromium based)";
        case agent.indexOf("opr") > -1 && !!window.opr: return "Opera";
        case agent.indexOf("chrome") > -1 && !!window.chrome: return "Chrome";
        case agent.indexOf("trident") > -1: return "MS IE";
        case agent.indexOf("firefox") > -1: return "Mozilla Firefox";
        case agent.indexOf("safari") > -1: return "Safari";
        default: return "other";
    }
})(window.navigator.userAgent.toLowerCase());
if (browserName == "Edge (chromium based)") {
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('提交了，等他審核完再來看吧！')");
}
if (browserName == "Opera") {
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('根據Mozilla Document，您的瀏覽器不支援此功能，請更換瀏覽器！')");
}
if (browserName == "Chrome") {
    document.getElementById("link").setAttribute("href", "https://chrome.google.com/webstore/detail/%E6%9E%97%E5%A5%95%E4%BD%91%E5%96%9C%E6%AD%A1%E6%9F%90%E5%80%8B%E4%BA%BA%E4%B9%8B%E6%96%B0%E5%88%86%E9%A0%81/dhfggnpdbpngaafgomimbmknhkoahhnk?hl=zh-TW&authuser=0");
}
if (browserName == "MS IE") {
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('請更換瀏覽器！')");
}
if (browserName == "MS Edge") {
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('請更新瀏覽器！')");
}
if (browserName == "Safari") {
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('換個瀏覽器吧，我註冊不了Apple ID😥註冊不了Apple ID')");
}
