window.onload = documentReady;

function documentReady() {
	if(document.getElementById("collapse-button")){
		document.getElementById("collapse-button").addEventListener("click", e => {
		    if(document.querySelector("nav").className == "") {
		        document.querySelector("nav").className = "active";
		    }else{
		        document.querySelector("nav").className = "";
		    }
		});
	}

	if(document.getElementsByClassName("card-container")[0]) {
        var content = document.getElementsByClassName("card-container")[0];
        fetch("js/allTemplates.json").then(response => response.json()).then(res => {
            res.templates.forEach((template, index) => {
                if(index != 0) {
                    const div = document.createElement("div");
                    div.className = "card-black";
                    div.innerHTML = `<img src="img/${template.image}">
									<div class="content">
										<span class="txt-25">Template #${template.number}</span><br>
										<a href="${template.url}" class="btn-sq blue">View Demo</a>
									</div>`;
                    content.appendChild(div);
                }
            });
        });
    }
}