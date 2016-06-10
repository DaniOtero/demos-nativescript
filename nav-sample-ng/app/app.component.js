"use strict";
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var router_1 = require("nativescript-angular/router");
//import {LoginPage} from "./pages/login/login.component";
var main_component_1 = require("./views/main/main.component");
var photos_component_1 = require("./views/photos/photos.component");
var web_component_1 = require("./views/web/web.component");
//import {ProfilePage} from "./pages/profile/profile.component";
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_deprecated_1.RouteConfig([
            // { path: "/Login", component: LoginPage, name: "Login" },
            { path: "/Main", component: main_component_1.MainComponent, name: "Main", useAsDefault: true },
            { path: "/Photos", component: photos_component_1.PhotosComponent, name: "Photos" },
            { path: "/Web", component: web_component_1.WebPageComponent, name: "Web" },
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map