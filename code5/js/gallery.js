let elements = document.getElementsByClassName('gallery');
for(i=0; i<elements.length; i++){
    elements[i].addEventListener('mouseover', function(event){
        let image = this.getElementsByTagName('img');
        image[0].style.width = (image[0].clientWidth * 1.2) + "px";
    });
    elements[i].addEventListener('mouseout', function(event){
        let image = this.getElementsByTagName('img');
        image[0].style.width = (image[0].clientWidth / 1.2) + "px";
    });
}