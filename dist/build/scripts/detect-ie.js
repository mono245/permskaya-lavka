function isBrowserIE() {
    return !!window.document.documentMode;
}

function onIEActions() {
    var IEText = document.getElementsByClassName("on-ie-text")[0];
    var wrapper = document.getElementsByClassName("wrapper")[0];
    var body = document.getElementsByTagName("body")[0];

    IEText.style.display = "block";
    IEText.style.fontSize = "25px";
    IEText.style.lineHeight = "1.4";
    wrapper.style.display = "none";
    body.style.padding = "35px";
}