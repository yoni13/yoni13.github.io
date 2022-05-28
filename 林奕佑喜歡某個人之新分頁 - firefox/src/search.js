let searchbar= document.getElementById("searchbar");

searchbar.onkeyup = function (e) {
    if (e.key === 'Enter') {
    event.preventDefault();
    window.location.replace('https://google.com/search?q='+ searchbar.value);
}
}