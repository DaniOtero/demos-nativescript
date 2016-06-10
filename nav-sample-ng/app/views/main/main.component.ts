import {Component, Input} from "@angular/core";
import {Router} from '@angular/router-deprecated'
import {View} from "ui/core/view";
import frameModule = require("ui/frame")

@Component({
    selector: "my-app",
    template: `
    <StackLayout>
        <Image width="100%" src="~/images/autentia.png" (tap)="onTap($event)" [visibility]="showImage ? 'visible' : 'collapse'"></Image>
        <Label text="Toca la imagen y veras lo que pasa"></Label>
        <Slider [(ngModel)]="animationMs" minValue="250" maxValue="2000"></Slider>
        <Switch [(ngModel)]="showImage"></Switch>
        <Button text="Ya me he cansado, sacame de aqui" (tap)="getMeOutOfHere()"></Button>
    </StackLayout>
`,
})
export class MainComponent {
    private animationMs : number;
    private showImage : boolean;

    // get showImage() : boolean {
    //     return this._showImage;
    // }
    //
    // set showImage(value : boolean) {
    //     this._showImage = value;
    //     //this.notifyPropertyChange('imageVisibility', this.imageVisibility)
    // }

    get imageVisibility(): string {
        return this.showImage ? 'visible' : 'collapse'
    }


    constructor(private router: Router) {
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
        this.router.navigate(["Photos"]);
    }
}
