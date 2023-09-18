import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  imports: [RouterLinkActive, RouterLink],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}