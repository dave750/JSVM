"use strict";

export class Bindings {
    static Init(references) {
        if (references) {
            for (let r of references) {
                Bindings.AddReference(r);
            }
        }
    }

    static AddReference(klass) {
        if (!Bindings._references) {
            Bindings._references = [];
        }
        if (!Bindings._references[klass.name]) {
            Bindings._references[klass.name] = klass;
        }
        
        this._Bind(klass);
    }

    static Find(name) {
        let bindable = document.querySelector("[data-object='" + name + "']");
        return Bindings._references[bindable.dataset.object];
    }

    static _Bind(klass){
        let bindables = document.querySelectorAll("[data-class='" + klass.name + "']");
        for (let bindable of bindables) {
            if (!Bindings[bindable.dataset.object]) {
                Bindings[bindable.dataset.object] = new Bindings._references[bindable.dataset.class](bindable);
            }
        }
    }
}
