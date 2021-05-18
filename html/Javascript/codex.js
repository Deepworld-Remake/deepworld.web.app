const xhr = new XMLHttpRequest();
xhr.addEventListener("load", (e) => {
    console.log(e.responseText);
    const text = e.responseText;
    console.log(JSON.parse(text));
});
const text = e.responseText;
xhr.overrideMimeType("text/plain");
xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
xhr.send();