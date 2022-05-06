"use strict";

class Gallery {

    _exhibitList;
    // _chosenExhibit;
    _chosenIndex;

    constructor(exhibitList) {
        this._exhibitList = exhibitList;

        //check if list is empty?
    }

    //load list of image objects into the gallery object to use
    // loadExhibits(exhibitList) {
        
    // }

    initGallery() {
        this.selectExhibit(0);
    }

    //update the choice of picture to show
    selectExhibit(index) {

        // console.log(index);
        //check bounds?

        this._chosenIndex = index;
        // this._chosenExhibit = this._exhibitList[index];

        //update the page
        //set the main exhibit
        //remove highlight from other thumbnails
        //add highlight to correct thumbnail
        displayPicture(this._exhibitList[index]);
        selectThumb(index);

    }

    //select previous image
    selectPrevious() {
        // console.log(`selecting previous`);
        // console.log(this);
        if (!this._exhibitList) {
            return;
        }
        // console.log(`we've gotten this far`)
        if (this._chosenIndex === 0) {
            this.selectExhibit(this._exhibitList.length - 1);
        } else {
            this.selectExhibit(this._chosenIndex - 1)
        }
    }

    //select next image
    selectNext() {
        // console.log(`selecting next`);
        // console.log(this);
        if (!this._exhibitList) {
            return;
        }

        if (this._chosenIndex === this._exhibitList.length - 1) {
            this.selectExhibit(0);
        } else {
            this.selectExhibit(this._chosenIndex + 1)
        }
    }


    //populate thumbnail pool with given function
    populateThumbnails(addThumb, thumbnailReference) {
        // console.log(this._exhibitList);
        this._exhibitList.forEach((picture, key) => {
            // console.log(key);
            addThumb(picture.thumbnailElement, key);
            thumbnailReference[key] = picture.thumbnailElement;
        });
    }


}