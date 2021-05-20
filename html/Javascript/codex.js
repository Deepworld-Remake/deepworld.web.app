const spriteURL = "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Source-Assets@master/Deepworld%20Sprites/inventory/";
let itemDataCache;

function clearConsole() {
    if (console._commandLineAPI && console._commandLineAPI.clear) {
        console._commandLineAPI.clear();
    } else if (console._inspectorCommandLineAPI && console._inspectorCommandLineAPI.clear) {
        console._inspectorCommandLineAPI.clear();
    } else if (console.clear) {
        console.clear();
    }
}

function imageExists(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status == 200;
}

function loadItemData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
        console.log(e);
        const text = e.target.responseText;
        const json = JSON.parse(text);
        itemDataCache = json;
        const rowElm = document.createElement("div");
        rowElm.classList.add("col-lg-4", "col-md-4", "col-sm-12");
        const titleElm = document.createElement("h1");
        titleElm.classList.add("feature-title");
        titleElm.innerText = "Items and Collectibles";
        rowElm.appendChild(titleElm);
        for (let i = 0; i < Object.keys(json.items).length; ++i) {
            const currentKey = Object.keys(json.items)[i];
            const currentItem = json.items[currentKey];
            if (currentItem.code && (currentItem.gui ? currentItem.gui : true)) {
                const contentElm = document.createElement("p");
                const contentImg = document.createElement("object");
                const contentNoneImg = document.createElement("img");
                const contentTitle = document.createElement("a");
                contentImg.classList.add("item-object");
                contentNoneImg.classList.add("item-image");
                contentImg.data = spriteURL + (currentItem.inventory ? currentItem.inventory : currentKey) + ".png";
                contentNoneImg.src = spriteURL + "none.png";
                contentImg.appendChild(contentNoneImg);
                contentElm.appendChild(contentImg);
                contentTitle.innerText += currentKey;
                contentTitle.classList.add("item-title");
                contentElm.appendChild(contentTitle);
                rowElm.appendChild(contentElm);
            }
        }
        document.querySelector(".row").appendChild(rowElm);
    });
    xhr.overrideMimeType("text/plain");
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
    xhr.send();
}