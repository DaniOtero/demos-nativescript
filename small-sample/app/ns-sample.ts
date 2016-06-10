import observable = require('data/observable');

import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Label } from "ui/label";
import { Button } from "ui/button";
import frames = require("ui/frame");


class ButtonSampleModel extends observable.Observable {
    private text : string
    constructor() {
        super();
        this.text = "Click me!";
        let that = this;
        setTimeout(() => {
            console.log("Set timeout: " + that.text)
            that.text += "... If you dare"
            that.notifyPropertyChange('text', that.text);
        }, 5000)
    }
    onButtonTap() {
        alert("You have clicked me... you'll pay for that >:(");
    }
}

export function onLoaded(args: any) {
    console.log("Page loaded");
    let page = <Page>args.object;
    page.bindingContext = new ButtonSampleModel();
}
