"use strict";


//window.onload = () => { ?
//load available images into an array of suitable objects and give them necessary properties
//grab the preloaded image elements
let preloadedImgElementList = document.querySelectorAll(`.preload-images img`);
let galleryList = new Array();
//loop through them
for( let i = 0; i < preloadedImgElementList.length; i++ ) {

    //create object and put it into an array
    let imgElement = preloadedImgElementList[i];
    let thumbnailElement = document.createElement(`img`);
    thumbnailElement.setAttribute(`src`, imgElement.getAttribute(`src`));
    thumbnailElement.setAttribute(`id`, `sm_` + imgElement.getAttribute(`id`));

    let galleryPicture = new GalleryPicture(imgElement.getAttribute(`id`), 
                                            imgElement, thumbnailElement,
                                            imgElement.getAttribute(`data-title`),
                                            imgElement.getAttribute(`data-description`));
    
    galleryList.push(galleryPicture);
}

// console.log(galleryList);


//initialize the gallery object
const gallery = new Gallery(galleryList);

gallery.populateThumbnails(addThumbnail);

//NOW init the gallery

gallery.initGallery();
// console.log(gallery);
// console.log()
//give gallery object means of assigning images to elements and highlight thumbnails


//load thumbnails. expects a thumbnail image element and index value it would be referenced with.
function addThumbnail(thumb, index) {
    // console.log(thumb);
    //parent
    // console.log(index);
    let thumbnailStrip = document.getElementById(`thumbnailStrip`);
    thumb.setAttribute(`data-index`, index);
    //add child
    thumbnailStrip.appendChild(thumb);

}

//highlight a thumbnail if hovered over
function highlightThumb(index) {
    //strip mouseover privileges of other thumbs
    //apply them to the chosen one
}

//select thumbnail if clicked
function selectThumb(index) {
    //strip the chosen one status from the imposters
    let imposter = document.querySelector(`#thumbnailStrip img.chosen`)
    if(imposter) 
        imposter.classList.remove(`chosen`);
  
    //apply it to the worthy one
    let worthyOne = document.querySelector(`[data-index = "${index}" ]`);
    // console.log(worthyOne);
    worthyOne.classList.add(`chosen`);
}

//takes the picture, expected to be of galleryPicture class, and places it in the main image element.
function displayPicture(picture) {

    //grab the current exhibit
    let exhibit = document.querySelector(`#exhibit img`);

    //insert new picture... 
    exhibit.replaceWith(picture.imageElement);

    //grab the caption heading
    let imgTitle = document.getElementById(`imgTitle`);
    imgTitle.innerText = picture.title;
    //update

    //grab the caption paragraph
    let imgDesc = document.getElementById(`imgDescription`)
    imgDesc.innerText = picture.description;
    //update

    //highlight thumbnail?

}






//select the default image to show

//register click event handlers
document.getElementById(`thumbnailStrip`).onclick = (event) => {
    // console.log(`thumbnailstrip clicked`);
    // console.log(event);

    //figure out which picture was clicked (if any)
    // console.log(event.target);
    let chosenIndex = event.target.getAttribute(`data-index`);
    // console.log(chosenIndex);
    if (chosenIndex === null) {
        //clicked between images
        return;
    } else {
        gallery.selectExhibit(chosenIndex);
    }
}

//WHY
let boundPrev = gallery.selectPrevious.bind(gallery);
let boundNext = gallery.selectNext.bind(gallery);


document.querySelector(`.navButton.left`).onclick = boundPrev;
document.querySelector(`.navButton.right`).onclick = boundNext;



//register mouseover event handlers

//on mouseover: show tooltip, maybe highlight?
//on mouse left: 