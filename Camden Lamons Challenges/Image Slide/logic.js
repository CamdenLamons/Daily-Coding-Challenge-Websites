var imageNumber = 0;
var imageNode = document.getElementById("image");
var imageArray = ["codingImageOne.png","codingImageTwo.png","codingImageThree.png"];
function loaded(){imageNode.src = imageArray[imageNumber]};
function next(){
    imageNumber += 1;
    if(imageNumber > imageArray.length-1){imageNumber = 0};
    imageNode.src = imageArray[imageNumber];
}
function back(){
    imageNumber -= 1;
    if(imageNumber < 0){imageNumber = imageArray.length-1};
    imageNode.src = imageArray[imageNumber];
}