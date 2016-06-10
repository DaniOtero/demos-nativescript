import {Component, ChangeDetectionStrategy} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Router} from "@angular/router-deprecated";
import {View} from "ui/core/view";
import frameModule = require("ui/frame")
import {ObservableArray} from 'data/observable-array';

@Component({
    selector: "my-app",
    template: `
    <ListView [items]="imagesUrls" (itemTap)="onListItemTap($event)">
        <template let-item="item">
            <StackLayout>
                <Image [src]="item" width="512" height="512"></Image>
                <Label [text]="item"></Label>
            </StackLayout>
        </template>
    </ListView>
    `,
})

export class PhotosComponent {
    private baseUrl = 'http://jsonplaceholder.typicode.com/photos'
    public imagesUrls = new ObservableArray();

    constructor(private http: Http, private router: Router) {
        let headers : Headers = new Headers()
        headers.set("Content-Type", "application/json")

        this.http.get(this.baseUrl, {headers: headers}).
        subscribe((response: any) => {
            let data = response.json();
            for(var i=0; i < ((data.length > 20) ? 20 : data.length); i++) {
                let url : string = data[i].url;
                this.imagesUrls.push(url);
            }
            console.log(JSON.stringify(this.imagesUrls))
            // this.notifyPropertyChange('imagesUrls',this.imagesUrls);

        },(error) => {
            console.log(error);
            alert("Algo ha ido mal al hacer la request :(")
        });
    }

    onListItemTap(args) {
        this.router.navigate(["Web", {url: this.imagesUrls.getItem(args.index)}]);
    }
}
