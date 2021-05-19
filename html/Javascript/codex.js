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
        const contentElm = document.createElement("p");
        let itemText;
        for (let i = 0; i < Object.keys(json.items).length; ++i) {
            const currentKey = Object.keys(json.items)[i];
            const currentItem = json.items[currentKey];
            if (currentItem.title) {
                itemText += currentItem.title + '\n';
                console.log(currentItem.title);
            }
        }
        contentElm.innerText = itemText;
        rowElm.appendChild(contentElm);
        document.querySelector(".row").appendChild(rowElm);
    });
    xhr.overrideMimeType("text/plain");
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/Deepworld-Remake/deepworld-config-json@master/config-items.json");
    xhr.send();
}