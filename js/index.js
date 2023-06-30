const head = document.head;
let index = 1;
//set to load banners 
head.addEventListener('load', function (event) {
    let img1 = new Image();
    img1.src = "images/banner1.jpg";
    let img2 = new Image();
    img2.src = "images/banner2.jpg";
    let img3 = new Image();
    img3.src = "images/banner3.jpg";
    console.log("banner images loaded");
});
//load banners scrolling
function loadImage(idStr, idNum){
    document.getElementById(idStr + idNum).src = "images/banner" + (index % 3 + 1) + ".jpg";
    console.log(index + " " + idStr + idNum + " images/banner" + (index % 3 + 1) + ".jpg");
    index++;
}
//set interval to load banners
window.setInterval(function(){
    document.getElementById('banner2').style.display = 'none';  // redundant to hidden attribute in html
    document.getElementById('banner3').style.display = 'none';  // redundant to hidden attribute in html
    loadImage("banner", 1);
}, 3000);