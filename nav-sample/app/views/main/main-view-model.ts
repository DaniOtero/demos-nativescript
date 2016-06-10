import observable = require("data/observable");
import {View} from "ui/core/view";
import frameModule = require("ui/frame")

export class HelloWorldModel extends observable.Observable {
    public animationMs : number;
    private _showImage : boolean;

    get showImage() : boolean {
        return this._showImage;
    }

    set showImage(value : boolean) {
        this._showImage = value;
        this.notifyPropertyChange('imageVisibility', this.imageVisibility)
    }

    get imageVisibility(): string {
        return this.showImage ? 'visible' : 'collapse'
    }


    constructor() {
        super();
        this.animationMs = 1000;
        this.showImage = true;
    }

    public onTap(args) {
        let time = this.animationMs;
        console.log("Tap on image: Animation time: "+ time)
        let view = <View>args.object;
        view.animate({
            rotate: 360,
            duration: time
        }).then(() => {
            view.rotate = 0;
        })
    }

    getMeOutOfHere() {
        frameModule.topmost().navigate("views/photos/photos");
    }
}
