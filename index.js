const files = [
    "pages/navMenu.html",
    "pages/main.html",
]


async function insertHTMLfiles() {
    files.forEach(async e => {
        htmlNode = await bringHTMLFile(e);
        document.body.insertAdjacentHTML("beforeend", htmlNode);
    })
}

async function bringHTMLFile(path){
    const resp = await fetch(path);
    file = await resp.text();
    return file
}



insertHTMLfiles();