"use strict";
var observable = require('data/observable');
var ButtonSampleModel = (function (_super) {
    __extends(ButtonSampleModel, _super);
    function ButtonSampleModel() {
        _super.call(this);
        this.text = "Click me!";
        var that = this;
        setTimeout(function () {
            console.log("Set timeout: " + that.text);
            that.text += "... If you dare";
            that.notifyPropertyChange('text', that.text);
        }, 5000);
    }
    ButtonSampleModel.prototype.onButtonTap = function () {
        alert("You have clicked me... you'll pay for that >:(");
    };
    return ButtonSampleModel;
}(observable.Observable));
function onLoaded(args) {
    console.log("Page loaded");
    var page = args.object;
    page.bindingContext = new ButtonSampleModel();
}
exports.onLoaded = onLoaded;
//# sourceMappingURL=ns-sample.js.map