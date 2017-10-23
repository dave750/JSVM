import { BoundObject } from "/lib/BoundObject.js";

export class ViewModel extends BoundObject {
    constructor(parent){
        super(parent);
        this._text = null;
        console.log("construct!");
    }

    get Text(){
        if (this._text == null){
            return "";
        }
        return this._text;
    }
    set Text(value){
        this._text = value;

        this.RaisePropertyChangedEvent("Text", value);
    }
}