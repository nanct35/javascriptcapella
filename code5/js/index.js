let index = 1;

function preload(){
    let img = new Image();
    img.src = "images/banner1.jpg";
    img.src = "images/banner2.jpg";
    img.src = "images/banner3.jpg";
    console.log("banner images loaded");

    img.src = "images/event.jpg";
    img.src = "images/firefighter.jpg";
    img.src = "images/silhouette.jpg";
    img.src = "images/work.jpg";
    console.log("gallery images loaded");
}

function loadImage(idStr, idNum){
    document.getElementById(idStr + idNum).src = "images/banner" + (index % 3 + 1) + ".jpg";
    console.log(index + " " + idStr + idNum + " images/banner" + (index % 3 + 1) + ".jpg");
    index++;
}

window.setInterval(function(){
    loadImage("banner", 1);
}, 3000);