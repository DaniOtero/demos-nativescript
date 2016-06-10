import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
<StackLayout>
    <Button [text]="text" (tap)="onButtonTap()"></Button>
</StackLayout>
`,
})
export class AppComponent {
    private text : string
    constructor() {
        this.text = "Click me!";
        let that = this;
        setTimeout(() => {
            console.log("Set timeout: " + that.text)
            that.text += "... If you dare"
        }, 5000)
    }
    onButtonTap() {
        alert("You have clicked me... you'll pay for that >:(");
    }
}
