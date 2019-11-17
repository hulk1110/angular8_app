import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgSwitch} from '@angular/common';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const resp = this.http.get('https://jsonplaceholder.typicode.com/todos');
    resp.subscribe((data) => this.todos = data);
  }

}
