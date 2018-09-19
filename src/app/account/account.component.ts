import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username: string;
  password: string;
  dob: string;
  age: number;
  currentUser = JSON.parse(localStorage.getItem('currentUser'));

  constructor() { }

  ngOnInit() {
    this.username = this.currentUser["username"];
    this.password = this.currentUser["password"];
    this.dob = this.currentUser["dob"];
    this.age = this.currentUser["age"];
  }

}
