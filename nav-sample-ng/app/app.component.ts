import {Component} from "@angular/core";
import {Router, RouteConfig} from "@angular/router-deprecated";
import {NS_ROUTER_DIRECTIVES} from "nativescript-angular/router";
import {MainComponent} from "./views/main/main.component";
import {PhotosComponent} from "./views/photos/photos.component";
import {WebPageComponent} from "./views/web/web.component";

@Component({
    selector: "main",
    directives: [NS_ROUTER_DIRECTIVES],
    template: "<page-router-outlet></page-router-outlet>"
})
@RouteConfig([
    { path: "/Main", component: MainComponent, name: "Main", useAsDefault: true },
    { path: "/Photos", component: PhotosComponent, name: "Photos" },
    { path: "/Web", component: WebPageComponent, name: "Web" },
])
export class AppComponent {}
