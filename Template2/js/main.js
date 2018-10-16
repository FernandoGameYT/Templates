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
}

// function fibonacci(num) {
//     var a = BigInt(0);
//     var b = BigInt(1);
//     if(num > 0){
//         if(num >= 1) {
//             console.log(BigInt(0));
//         }
//         if(num >= 2) {
//             console.log(BigInt(1));
//         }
//         if(num > 2) {
//             for(var i = 0; i < num-1;i++) {
//                 b += BigInt(a);
//                 console.log(b);
//                 a = BigInt(b - a);
//             }
//         }
//     }
// }