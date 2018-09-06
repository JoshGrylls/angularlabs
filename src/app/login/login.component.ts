import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';
  constructor(private route: ActivatedRoute,
              private router: Router) {  }

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.username == "user" && this.password == "123") {
      localStorage.setItem('username', this.username);
      this.router.navigateByUrl('/account');
    } else {
      alert("Invalid..");
    }
  }
}
