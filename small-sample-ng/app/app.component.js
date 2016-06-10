"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.text = "Click me!";
        var that = this;
        setTimeout(function () {
            console.log("Set timeout: " + that.text);
            that.text += "... If you dare";
        }, 5000);
    }
    AppComponent.prototype.onButtonTap = function () {
        alert("You have clicked me... you'll pay for that >:(");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<StackLayout>\n    <Button [text]=\"text\" (tap)=\"onButtonTap()\"></Button>\n</StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map