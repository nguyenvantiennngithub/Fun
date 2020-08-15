var boxElementYes = document.querySelector(".yes");
var boxElementNo = document.querySelector(".no");

// console.log([boxElement])
console.log(Math.floor(Math.random() * 500));
boxElementNo.style.top = "250px";
boxElementNo.style.left = "700px";

boxElementYes.style.top = "250px";
boxElementYes.style.left = "500px";


function noo(){
    // var leftt = Math.floor(Math.random() * 1100);
    // var topp = Math.floor(Math.random() * 500);
    // boxElementNo.style.left = `${leftt}px`;
    // boxElementNo.style.top = `${topp}px`;
    boxElementNo.innerHTML = "Đẹp"
}

function yess(){
    boxElementNo.style.opacity = "0";
    boxElementYes.style.opacity = "0";
    document.querySelector(".ChonDung").style.display = "block";

}

// boxElementNo.setAttribute("left", left);
// boxElementNo.setAttribute("top", top);
// boxElementNo.title = "dasdsad";
// boxElementNo.style.left = `${leftt}px`;
// boxElementNo.style.top = `${topp}px`;

// boxElementNo.left = leftt;

