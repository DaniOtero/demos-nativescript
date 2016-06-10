import observable = require("data/observable");
import observableArray = require("data/observable-array");
import {Page} from 'ui/page';
import frameModule = require("ui/frame")

class BicisModel extends observable.Observable {
    private url = 'http://jsonplaceholder.typicode.com/photos'
    public imagesUrls = new observableArray.ObservableArray();
    constructor() {
        super();
        fetch(this.url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).
        then((data: any) => {
            return data.json();
        }).then((data: any) => {
            for(var i=0; i < ((data.length > 20) ? 20 : data.length); i++) {
                let url : string = data[i].url;
                this.imagesUrls.push(url);
            }
            //console.log(JSON.stringify(this.imagesUrls))
            this.notifyPropertyChange('imagesUrls',this.imagesUrls);

        }).catch((error) => {
            console.log(error);
            alert("Something went wrong :(")
        })
    }

    onListItemTap(args) {
        var itemIndex = args.index;
        frameModule.topmost().navigate({
            moduleName: "views/webview/web",
            context: {url: this.imagesUrls.getItem(itemIndex)}
        });
    }
}

export function onLoad(args: any) {
    // Get the event sender
    var page = <Page>args.object;
    page.bindingContext = new BicisModel();
}
