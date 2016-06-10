"use strict";
var observable = require("data/observable");
var observableArray = require("data/observable-array");
var frameModule = require("ui/frame");
var BicisModel = (function (_super) {
    __extends(BicisModel, _super);
    function BicisModel() {
        var _this = this;
        _super.call(this);
        this.url = 'http://jsonplaceholder.typicode.com/photos';
        this.imagesUrls = new observableArray.ObservableArray();
        fetch(this.url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).
            then(function (data) {
            return data.json();
        }).then(function (data) {
            for (var i = 0; i < ((data.length > 20) ? 20 : data.length); i++) {
                var url = data[i].url;
                _this.imagesUrls.push(url);
            }
            //console.log(JSON.stringify(this.imagesUrls))
            _this.notifyPropertyChange('imagesUrls', _this.imagesUrls);
        }).catch(function (error) {
            console.log(error);
            alert("Algo ha ido mal al hacer la request :(");
        });
    }
    BicisModel.prototype.onListItemTap = function (args) {
        var itemIndex = args.index;
        frameModule.topmost().navigate({
            moduleName: "views/webview/web",
            context: { url: this.imagesUrls.getItem(itemIndex) }
        });
    };
    return BicisModel;
}(observable.Observable));
function onLoad(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new BicisModel();
}
exports.onLoad = onLoad;
//# sourceMappingURL=photos.js.map