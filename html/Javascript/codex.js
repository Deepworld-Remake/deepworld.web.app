const spriteURL = "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Source-Assets@master/Sprites/inventory/";
let itemDataCache;
let itemDataCacheTitles = [];
let itemDataCacheElements = [];

function clearConsole() {
    if (console._commandLineAPI && console._commandLineAPI.clear) {
        console._commandLineAPI.clear();
    } else if (console._inspectorCommandLineAPI && console._inspectorCommandLineAPI.clear) {
        console._inspectorCommandLineAPI.clear();
    } else if (console.clear) {
        console.clear();
    }
}

function getEditDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;
    var matrix = [];
    var i;
    for (i = 0; i <= b.length; ++i) {
        matrix[i] = [i];
    }
    var j;
    for (j = 0; j <= a.length; ++j) {
        matrix[0][j] = j;
    }
    for (i = 1; i <= b.length; ++i) {
        for (j = 1; j <= a.length; ++j) {
            if (b.charAt(i - 1) == a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
            }
        }
    }

    return matrix[b.length][a.length];
};

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
                    const contentElm = document.createElement("p");
                    const contentImg = document.createElement("img");
                    const contentTitle = document.createElement("a");
                    const contentSep = document.createElement("br");
                    const contentSubTitle = document.createElement("a");
                    const contentContent = document.createElement("div");
                    contentImg.classList.add("item-image");
                    if (currentItem.inventory)
                        contentImg.src = spriteURL + currentItem.inventory + ".png";
                    else if (currentItem.inventory_frame)
                        contentImg.src = spriteURL + currentItem.inventory_frame.replace("inventory/", "") + ".png";
                    else
                        contentImg.src = spriteURL + itemsArray[i] + ".png";
                    contentTitle.classList.add("item-title");
                    if (!currentItem.title)
                        contentTitle.innerText += itemsArray[i].split("/")[1]
                            .replace("-", " ")
                            .replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
                    else
                        contentTitle.innerText += currentItem.title;
                    contentSubTitle.innerText += itemsArray[i];
                    contentSubTitle.classList.add("item-subtitle");
                    contentContent.classList.add("item-content");
                    contentElm.appendChild(contentImg);
                    contentContent.appendChild(contentTitle);
                    contentContent.appendChild(contentSep);
                    contentContent.appendChild(contentSubTitle);
                    contentElm.appendChild(contentContent);
                    rowElm.appendChild(contentElm);
                    itemDataCacheTitles.push(currentItem.title);
                    itemDataCacheElements[currentItem.title] = contentElm;
                } catch (e) {
                    console.log(e);
                }
            }
            document.querySelector(".itemList").appendChild(rowElm);
        });
        xhr2.overrideMimeType("text/plain");
        xhr2.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Config-JSON@45ca91265738360f7b0f7b76d87f5bbd0cf92606/config-items.json");
        xhr2.send();
    });
    xhr.overrideMimeType("text/plain");
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Config-JSON@45ca91265738360f7b0f7b76d87f5bbd0cf92606/config.json");
    xhr.send();
}

document.querySelector(".searchBarButton").addEventListener("click", () => {
    var lowest = 5;
    var lowestElements = [];
    var item = document.querySelector(".searchBar").value;
    for (let i = 0; i < itemDataCacheTitles.length; ++i) {
        itemDataCacheElements[itemDataCacheTitles[i]].classList.add("hiddenItem");
        var nextLowest = getEditDistance(itemDataCacheTitles[i] || "", item);
        if (nextLowest < lowest) {
            lowest = nextLowest;
            lowestElements.push(itemDataCacheElements[itemDataCacheTitles[i]]);
            if (nextLowest == 0) {
                lowestElements = [];
                lowestElements = itemDataCacheElements[itemDataCacheTitles[i]];
                break;
            }
        }
    }
    if (lowest == 0)
        lowestElements.classList.remove("hiddenItem");
    else if (lowestElements.length > 0) {
        for (let i = 0; i < lowestElements.length; ++i) {
            lowestElements[i].classList.remove("hiddenItem");
        }
    }
});