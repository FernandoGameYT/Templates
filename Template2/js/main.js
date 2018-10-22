window.onload = onLoad;

function onLoad() {
    if(document.querySelector("nav")) {
        var nav = document.querySelector("nav");
        document.getElementById("collapse").addEventListener("click", () => {
            if(nav.className == "") {
                    nav.className = "active";
            }else{
                    nav.className = "";
            }
        });

        window.addEventListener("scroll", e => {
            if(window.innerWidth > 610) {
                if(window.scrollY >= 50) {
                    nav.className = "bg";
                }else{
                    nav.className = "";
                }
            }
        });
    }

    if(document.getElementsByClassName("templates-center")[0]) {
        var content = document.getElementsByClassName("templates-center")[0];
        fetch("../js/allTemplates.json").then(response => response.json()).then(res => {
            res.templates.forEach((template, index) => {
                if(index != 1) {
                    const div = document.createElement("div");
                    div.className = "template";
                    div.innerHTML = `<img src="../../img/${template.image}" />
                                    <h2>Template #${template.number}</h2>
                                    <a href="../${template.url}">View Demo</a>`;
                    content.appendChild(div);
                }
            });
        });
    }
}