var itemData;

function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
        if(array[i][attr] === value) {
            return i;
        }
    }
    return -1;
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var obj = this.responseText;
        itemData = JSON.parse(obj);
        const urlParams = new URLSearchParams(window.location.search);
        console.log(urlParams);
        if (!urlParams.has("itemId") || urlParams.get("itemId") == undefined || itemData[urlParams.get("itemId")] == undefined) {
            window.location.replace("http://deepworld.web.app/codex");
        }
        const currentItem = itemData[urlParams.get("itemId")];
        console.log(currentItem);
        if (currentItem.name) {
            document.querySelector(".itemIcon").src = `https://dwre-codex.web.app/Sprites/${currentItem.sprite}.png`;
            var anchor = document.createElement("a");
            anchor.setAttribute("class", "itemDataLink");
            anchor.setAttribute("href", `./items?itemId=${currentItem.id}`);
            anchor.innerHTML = `<img class="itemDataIcon" src="https://dwre-codex.web.app/Sprites/${currentItem.sprite}.png"><span class="itemDataText">${currentItem.ui}</span><div class="itemDataId">${currentItem.id}</div>`;
            document.querySelector(".itemData").appendChild(anchor);
        }
    }
};

xhttp.open("GET", "https://raw.githubusercontent.com/Deepworld-Remake/Deepworld-Codex-Remastered/master/ItemConfig.json", true);
xhttp.send();