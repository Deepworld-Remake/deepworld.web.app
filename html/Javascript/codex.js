const xhr = new XMLHttpRequest();
xhr.addEventListener("load", (e) => {
    console.log(e);
});
xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
xhr.send();