"use strict";
var observable = require("data/observable");
var frameModule = require("ui/frame");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.animationMs = 1000;
        this.showImage = true;
    }
    Object.defineProperty(HelloWorldModel.prototype, "showImage", {
        get: function () {
            return this._showImage;
        },
        set: function (value) {
            this._showImage = value;
            this.notifyPropertyChange('imageVisibility', this.imageVisibility);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HelloWorldModel.prototype, "imageVisibility", {
        get: function () {
            return this.showImage ? 'visible' : 'collapse';
        },
        enumerable: true,
        configurable: true
    });
    HelloWorldModel.prototype.onTap = function (args) {
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
    HelloWorldModel.prototype.getMeOutOfHere = function () {
        frameModule.topmost().navigate("views/photos/photos");
    };
    return HelloWorldModel;
}(observable.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=main-view-model.js.map