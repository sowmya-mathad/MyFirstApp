import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css',
    imports: [FormsModule]
})
export class AppNavbar {

    userName: string = "Sowmya";
    buttonClick() {
        console.log("Button clicked");
    }
    mouseOver() {
        console.log("MouseOver button");
    }
    keyEnter(event: any) {
        if (event.keyCode == 13) {
            console.log("Enter key pressed");
        }
    }
    // keyFiltering() {
    //     console.log("key Filtering Enter pressed");
    // }
    keyFiltering(user: HTMLInputElement) {
        console.log(user.value);
    }

    updatedUserName(username: HTMLInputElement) {
        this.userName = username.value;
        console.log(this.userName);
    }
}