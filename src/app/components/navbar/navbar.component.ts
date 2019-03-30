import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navs = [
    { name: 'bio', active: true },
    { name: 'contact', active: false }
  ];
  
  constructor(){}
  
  ngOnInit() {

  }

}
