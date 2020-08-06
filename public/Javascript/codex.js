var itemData;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		var obj = this.responseText;
		itemData = JSON.parse(obj);

		itemData.forEach((e) => {
			if (e.name) {
				var anchor = document.createElement("a");
				anchor.setAttribute("class", "itemDataLink");
				anchor.setAttribute("href", `./items?itemId=${e.id}`);
				anchor.innerHTML = `<img class="itemDataIcon" src="https://dwre-codex.web.app/Sprites/${e.sprite}.png"><span class="itemDataText">${e.ui}</span><div class="itemDataId">${e.id}</div>`;
				document.querySelector(".itemData").appendChild(anchor);
			}
		});
	}
};

xhttp.open("GET", "../Config/ItemConfig.json", true);
xhttp.send();