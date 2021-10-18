import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private userservice: UserserviceService) { }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      this.users = data;
    });
  }
  uname: any = '';
  pass: any = '';
  trueFalse = false;
  flag:boolean;
  fn() {
    console.log(this.uname);
    for (let i = 0; i < this.users.length; i++) {
      if (this.uname==this.users[i].first_name) {
        this.flag=true;
        break
      }
    }
    if(this.flag){
      this.trueFalse=false;
      this.router.navigateByUrl("product")
    }
    else{
      this.trueFalse=true;
      this.uname="";
    }
    
  }

}
