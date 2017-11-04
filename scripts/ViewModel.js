"use strict";

import { BoundObject } from "/lib/BoundObject.js";

export class ViewModel extends BoundObject {
    constructor(parent){
        super(parent);
        this._text = null;
        this._list = null;
    }

    get Text(){
        if (this._text === null){
            return "";
        }
        return this._text;
    }
    set Text(value){
        this._text = value;

        this.RaisePropertyChangedEvent("Text", value);
    }

    get List() {
        if (this._list === null) {
            return [];
        }
        return this._list;
    }
    set List(value) {
        this._list = value;

        this.RaisePropertyChangedEvent("List", value);
    }
}