const pagesfiles = {
    home : [
        "pages/main.html",
    ],
    aboutUs : [
        "pages/aboutUs.html"
    ],
    documents : [
        "pages/documents.html"        
    ],
    projects : [
        "pages/aboutUs.html"
        
    ],
    meetings : [
        "pages/aboutUs.html"        
    ]
}


//This function gets trigger when the page already loaded so it doesn't fail
//it adds the navBar and then the home page
window.addEventListener('load', function () {    
    loadNavBar();
    addHMLTContent(pagesfiles["home"]);
});

function loadNavBar(){
    addHMLTContent(["navMenu.html"]);
    createNavBar_addEvenetListeners();
}
function createNavBar_addEvenetListeners(){
    waitForElement('.TopMenu').then((elm) => {
        document.getElementById("topMenu_optionButton_Home"       ).onclick = function(){     loadRoute(pagesfiles["home"]);    }
        document.getElementById("topMenu_optionButton_AboutUs"    ).onclick = function(){     loadRoute(pagesfiles["aboutUs"]); }
        document.getElementById("topMenu_optionButton_Meetings"   ).onclick = function(){     loadRoute(pagesfiles["home"]);    }
        document.getElementById("topMenu_optionButton_Documents"  ).onclick = function(){     loadRoute(pagesfiles["documents"]);    }
        document.getElementById("topMenu_optionButton_Projects"   ).onclick = function(){     loadRoute(pagesfiles["home"]);    }
        document.getElementById("topMenu_optionButton_Gallery"    ).onclick = function(){     loadRoute(pagesfiles["home"]);    }
    });
}
function waitForElement(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}




//every time we go to a different section
function loadRoute(filesToAdd){
    deleteHTMLContent();
    loadNavBar();
    addHMLTContent(filesToAdd);
}
function deleteHTMLContent(){
    document.body.innerHTML = "";
}







//add the indicated HTML files into the page
async function addHMLTContent(content) {
    content.forEach(async e => {
        htmlNode = await bringHTMLFile(e);
        document.body.insertAdjacentHTML("beforeend", htmlNode);
    })
}
//retrieves and parses an HTML file
async function bringHTMLFile(path){
    const resp = await fetch(path);
    file = await resp.text();
    return file
}



