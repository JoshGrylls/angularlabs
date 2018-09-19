import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.username == "user" && this.password == "123") {
      var currentUser = {username:"user", password:"123", dob:"17/08/1999", "age":19};

      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      this.router.navigateByUrl('/account');
    } else {
      alert("Invalid..");
    }
  }
}
