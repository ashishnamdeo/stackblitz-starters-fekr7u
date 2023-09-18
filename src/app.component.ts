import { Component } from "@angular/core";
import { RouterLinkActive, RouterLink, RouterOutlet } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HomeComponent]
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
}