const spriteURL = "https://cdn.jsdelivr.net/gh/Deepworld-Remake/Deepworld-Source-Assets@tree/master/Deepworld%20Sprites/inventory/";

function imageExists(url) {
    var img = new Image();
    img.onload = function() { 
        img = null; 
        return true;
    };
    img.onerror = function() {
        img = null;
        return false;
    };
    img.src = url;
}

function loadItemData() {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e) => {
        console.log(e);
        const text = e.target.responseText;
        const json = JSON.parse(text);
        const rowElm = document.createElement("div");
        rowElm.classList.add("col-lg-4", "col-md-4", "col-sm-12");
        const titleElm = document.createElement("h1");
        titleElm.classList.add("feature-title");
        titleElm.innerText = "Items and Collectibles";
        rowElm.appendChild(titleElm);
        for (let i = 0; i < Object.keys(json.items).length; ++i) {
            const currentKey = Object.keys(json.items)[i];
            const currentItem = json.items[currentKey];
            if (currentItem.code) {
                const contentElm = document.createElement("p");
                const contentImg = document.createElement("img");
                contentImg.classList.add("item-image");
                if (imageExists(spriteURL + currentKey)) {
                    contentImg.src = spriteURL + currentKey + ".png";
                }
                contentElm.appendChild(contentImg);
                contentElm.innerText = currentKey;
                rowElm.appendChild(contentElm);
            }
        }
        document.querySelector(".row").appendChild(rowElm);
    });
    xhr.overrideMimeType("text/plain");
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
    xhr.send();
}