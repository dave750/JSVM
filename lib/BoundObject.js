"use strict";

export class BoundObject {
    constructor(parent) {
        this._parent = parent;
    }
    RaisePropertyChangedEvent(tag, value) {
        let elem = this._parent.querySelector("[data-binding='" + tag + "']");
        if (elem) {
            elem.innerText = value;
        }
    }
}