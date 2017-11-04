"use strict";

export class BoundObject {
    constructor(parent) {
        this._parent = parent;
        this._dataTemplates = {};
    }
    RaisePropertyChangedEvent(tag, value) {
        let elem = this._parent.querySelector("[data-binding='" + tag + "']");
        if (elem) {

            let type = elem.dataset.bindingType;

            if (type === "String") {
                elem.innerText = value;
            }
        
            else if (type === "String-List") {
                if (!this._dataTemplates[tag]) {
                    this._dataTemplates[tag] = elem.querySelector("[data-binding-type='Data-Template']")
                }
                elem.innerHTML = "";
                let template = this._dataTemplates[tag];
                template.setAttribute("style", "");
                for (let val of value) {
                    let t = template.cloneNode(true);
                    t.innerText = val;
                    elem.appendChild(t);
                }
            }
        }
       

        
    }
}