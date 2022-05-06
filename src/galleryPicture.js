"use strict";

class GalleryPicture{
    
    _id;
    _image;
    _thumbnail;
    _title;
    _description;
    _tooltip;

    constructor(id, imgElement, thumbElement, title, description) {
        this._id = id;
        this._image = imgElement;
        this._thumbnail = thumbElement;
        this._title = title;
        this._description = description
        this._tooltip = title;
    }

    get imageElement() {
        return this._image;
    }

    get thumbnailElement() {
        return this._thumbnail;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get tooltip() {
        return this._tooltip;
    }

}