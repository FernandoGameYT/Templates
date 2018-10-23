window.onload = onLoad;
function onLoad() {
    if(document.getElementById("content")) {
        var nav = document.getElementById("content");
        document.getElementById("navbar-collapse").addEventListener("click", () => {
            if(nav.className == "") {
                nav.className = "active";
            }else{
                nav.className = "";
            }
        });
    }
    if(document.getElementsByClassName("templates")[0]) {
        var content = document.getElementsByClassName("templates")[0];
        fetch("../js/allTemplates.json").then(response => response.json()).then(res => {
            res.templates.forEach((template, index) => {
                if(index != 2) {
                    const div = document.createElement("div");
                    div.className = "template";
                    div.innerHTML = `<div class="front">
                                        <img src="../img/${template.image}">
                                    </div>
                                    <div class="back">
                                        <span class="txt-25">Template #${template.number}</span><br>
                                        <a href="../${template.url}">View Demo</a>
                                    </div>`;
                    content.appendChild(div);
                }
            });
        });
    }
}