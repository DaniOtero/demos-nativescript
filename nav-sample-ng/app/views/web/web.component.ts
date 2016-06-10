import {Component, OnInit} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router-deprecated";
import {View} from "ui/core/view";
import frameModule = require("ui/frame")
import {ObservableArray} from 'data/observable-array';
import {RouteParams} from '@angular/router-deprecated'

@Component({
    selector: "my-app",
    template: `
    <WebView [src]="url">
    </WebView>
    `,
})

export class WebPageComponent implements OnInit{
    private url : string;
    constructor(private routeParams:RouteParams) {}

    ngOnInit() {
        this.url = this.routeParams.get('url')
        console.log(this.url)
    }
}
