"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var WebPageComponent = (function () {
    function WebPageComponent(routeParams) {
        this.routeParams = routeParams;
    }
    WebPageComponent.prototype.ngOnInit = function () {
        this.url = this.routeParams.get('url');
        console.log(this.url);
    };
    WebPageComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <WebView [src]=\"url\">\n    </WebView>\n    ",
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.RouteParams])
    ], WebPageComponent);
    return WebPageComponent;
}());
exports.WebPageComponent = WebPageComponent;
//# sourceMappingURL=web.component.js.map