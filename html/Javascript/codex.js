const spriteURL = "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Source-Assets@master/Sprites/inventory/";
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
            for (let i = 0; i < itemsArray.length; ++i) {
                const currentItem = json.items[itemsArray[i]];
                try {
                    if (currentItem.code) {
                        const contentElm = document.createElement("p");
                        const contentImg = document.createElement("img");
                        const contentTitle = document.createElement("a");
                        const contentSep = document.createElement("br");
                        const contentSubTitle = document.createElement("a");
                        const contentContent = document.createElement("div");
                        contentImg.classList.add("item-image");
                        contentImg.src = spriteURL + (currentItem.inventory || currentItem.inventory_frame.replace("inventory/", "") || itemsArray[i]) + ".png";
                        contentTitle.innerText += (currentItem.title || "(Missing Title)");
                        contentTitle.classList.add("item-title");
                        contentSubTitle.innerText += itemsArray[i];
                        contentSubTitle.classList.add("item-subtitle");
                        contentContent.classList.add("item-content");
                        contentElm.appendChild(contentImg);
                        contentContent.appendChild(contentTitle);
                        contentContent.appendChild(contentSep);
                        contentContent.appendChild(contentSubTitle);
                        contentElm.appendChild(contentContent);
                        rowElm.appendChild(contentElm);
                    }
                } catch(e) {
                    console.log(e);
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