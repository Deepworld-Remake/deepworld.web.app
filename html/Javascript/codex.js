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
    xhr.addEventListener("load", (ec) => {
        const xhr2 = new XMLHttpRequest();
        const textConfig = ec.target.responseText;
        const jsonConfig = JSON.parse(textConfig);
        let itemsArray = [];
        for (let i = 0; i < jsonConfig.inventory.length; ++i) {
            var currentTab = jsonConfig.inventory[i];
            console.log(i, currentTab.items);
            itemsArray = itemsArray.length > 0 ? itemsArray.concat(currentTab.items) : itemsArray = currentTab.items;
        }
        console.log(itemsArray);
        xhr2.addEventListener("load", (e) => {
            const text = e.target.responseText;
            const json = JSON.parse(text);
            itemDataCache = json;
            const rowElm = document.createElement("div");
            rowElm.classList.add("col-lg-4", "col-md-4", "col-sm-12");
            const titleElm = document.createElement("h1");
            titleElm.classList.add("feature-title");
            titleElm.innerText = "Items and Collectibles";
            rowElm.appendChild(titleElm);
            console.log(itemsArray.length);
            for (let i = 0; i < itemsArray.length; ++i) {
                const currentItem = json.items[itemsArray[i]];
                if (currentItem.code) {
                    const contentElm = document.createElement("p");
                    const contentNoneImg = document.createElement("img");
                    const contentTitle = document.createElement("a");
                    contentNoneImg.classList.add("item-image");
                    contentNoneImg.src = spriteURL + currentItem.inventory + ".png";
                    contentTitle.innerText += currentKey;
                    contentTitle.classList.add("item-title");
                    contentElm.appendChild(contentTitle);
                    rowElm.appendChild(contentElm);
                }
            }
            document.querySelector(".row").appendChild(rowElm);
        });
        xhr2.overrideMimeType("text/plain");
        xhr2.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
        xhr2.send();
    });
    xhr.overrideMimeType("text/plain");
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config.json");
    xhr.send();
}