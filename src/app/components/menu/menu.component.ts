import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.scss' ]
})
export class MenuComponent implements OnInit {

  routes = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Posts',
      path: '/posts'
    },
  ]
  ngOnInit (): void {
  }

}
