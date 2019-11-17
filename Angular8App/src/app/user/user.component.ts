import { Component, OnInit } from '@angular/core';
import { user } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: user = {
    id: 1110,
    name: 'Nishant',
    email: 'nishant.monty@gmail.com',
    mobile : 9632777681,
  };
  constructor() { }

  ngOnInit() {
  }

}
