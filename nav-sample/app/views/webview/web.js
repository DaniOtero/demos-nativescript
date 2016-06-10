"use strict";
var observable = require("data/observable");
var WebModel = (function (_super) {
    __extends(WebModel, _super);
    function WebModel(url) {
        _super.call(this);
        this.url = url;
    }
    return WebModel;
}(observable.Observable));
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new WebModel(page.navigationContext.url);
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=web.js.map