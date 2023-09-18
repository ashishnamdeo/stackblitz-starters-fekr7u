import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone:true,
  imports: [RouterLinkActive, RouterLink]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}