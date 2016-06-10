"use strict";
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_deprecated_1 = require("@angular/router-deprecated");
var observable_array_1 = require('data/observable-array');
var PhotosComponent = (function () {
    function PhotosComponent(http, router) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.baseUrl = 'http://jsonplaceholder.typicode.com/photos';
        this.imagesUrls = new observable_array_1.ObservableArray();
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/json");
        this.http.get(this.baseUrl, { headers: headers }).
            subscribe(function (response) {
            var data = response.json();
            for (var i = 0; i < ((data.length > 20) ? 20 : data.length); i++) {
                var url = data[i].url;
                _this.imagesUrls.push(url);
            }
            console.log(JSON.stringify(_this.imagesUrls));
            // this.notifyPropertyChange('imagesUrls',this.imagesUrls);
        }, function (error) {
            console.log(error);
            alert("Algo ha ido mal al hacer la request :(");
        });
    }
    PhotosComponent.prototype.onListItemTap = function (args) {
        this.router.navigate(["Web", { url: this.imagesUrls.getItem(args.index) }]);
    };
    PhotosComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ListView [items]=\"imagesUrls\" (itemTap)=\"onListItemTap($event)\">\n        <template let-item=\"item\">\n            <StackLayout>\n                <Image [src]=\"item\" width=\"512\" height=\"512\"></Image>\n                <Label [text]=\"item\"></Label>\n            </StackLayout>\n        </template>\n    </ListView>\n    ",
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_deprecated_1.Router])
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map