import { Component, OnInit } from '@angular/core';
import { user } from './user';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const resp = this.http.get('https://jsonplaceholder.typicode.com/users');
    resp.subscribe((data) => this.users = data);
  }

}
