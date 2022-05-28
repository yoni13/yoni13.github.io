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
    document.getElementById("link").setAttribute("href", "#");
    document.getElementById("link").setAttribute("onclick", "alert('提交了，等他審核完再來看吧！')");
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
