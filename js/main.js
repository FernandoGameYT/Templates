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
}