const webLinks = {
    "home": ["/", "Home"],
    "faq": ["/faq", "FAQ"],
    "codex": ["/codex", "Codex"],
    "downloads": ["/downloads", "Downloads"],
    "server": ["/server", "Private Server"]
}

function loadWebLinks(element, socket, currentPage) {
    for (var i = 0; i < Object.keys(webLinks); ++i) {
        const currentWebLink = webLinks[Object.keys(webLinks)[i]];
        const element = document.querySelector(element);
        const listElement = document.createElement("li");
        listElement.classList.add("nav-item");
        const linkElement = document.createElement("a");
        linkElement.classList.add("nav-link");
        linkElement.href = socket + currentWebLink[0];
        linkElement.innerText = currentWebLink[1];
        listElement.appendChild(linkElement);
        document.body.appendChild(listElement);
    }
}