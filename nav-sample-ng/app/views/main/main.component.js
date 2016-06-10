"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var MainComponent = (function () {
    function MainComponent(router) {
        this.router = router;
        this.animationMs = 1000;
        this.showImage = true;
    }
    Object.defineProperty(MainComponent.prototype, "imageVisibility", {
        // get showImage() : boolean {
        //     return this._showImage;
        // }
        //
        // set showImage(value : boolean) {
        //     this._showImage = value;
        //     //this.notifyPropertyChange('imageVisibility', this.imageVisibility)
        // }
        get: function () {
            return this.showImage ? 'visible' : 'collapse';
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.onTap = function (args) {
        var time = this.animationMs;
        console.log("Tap on image: Animation time: " + time);
        var view = args.object;
        view.animate({
            rotate: 360,
            duration: time
        }).then(function () {
            view.rotate = 0;
        });
    };
    MainComponent.prototype.getMeOutOfHere = function () {
        this.router.navigate(["Photos"]);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <StackLayout>\n        <Image width=\"100%\" src=\"~/images/autentia.png\" (tap)=\"onTap($event)\" [visibility]=\"showImage ? 'visible' : 'collapse'\"></Image>\n        <Label text=\"Toca la imagen y veras lo que pasa\"></Label>\n        <Slider [(ngModel)]=\"animationMs\" minValue=\"250\" maxValue=\"2000\"></Slider>\n        <Switch [(ngModel)]=\"showImage\"></Switch>\n        <Button text=\"Ya me he cansado, sacame de aqui\" (tap)=\"getMeOutOfHere()\"></Button>\n    </StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=main.component.js.map