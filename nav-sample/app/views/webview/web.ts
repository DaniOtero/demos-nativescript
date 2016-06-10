import observable = require("data/observable");
import observableArray = require("data/observable-array");
import {Page} from 'ui/page';

class WebModel extends observable.Observable {
    constructor(public url: string) {
        super();
    }
}

export function navigatingTo(args: any) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new WebModel(page.navigationContext.url);
}
