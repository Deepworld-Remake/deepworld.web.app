const webLinks = {
    "home": ["/", "Home"],
    "faq": ["/faq", "FAQ"],
    "codex": ["/codex", "Codex"],
    "downloads": ["/downloads", "Downloads"],
    "server": ["/server", "Private Server"]
};

function loadWebLinks(element, socket, currentPage) {
    for (var i = 0; i < Object.keys(webLinks).length; ++i) {
        const currentWebLink = webLinks[Object.keys(webLinks)[i]];
        const listElement = document.createElement("li");
        listElement.classList.add("nav-item");
        const linkElement = document.createElement("a");
        linkElement.classList.add("nav-link");
        if (Object.keys(webLinks)[i] != currentPage)
            linkElement.href = socket + currentWebLink[0];
        linkElement.innerText = currentWebLink[1];
        listElement.appendChild(linkElement);
        document.querySelector(element).appendChild(listElement);
    }
}