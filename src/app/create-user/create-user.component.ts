import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../login/user';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User;
  users: User[];
  val: any;
  constructor(private route: ActivatedRoute, private router: Router, private userservice: UserserviceService) {
    this.user = new User();
  }

  sub() {
    console.log(this.user);
    this.userservice.saveUser(this.user).subscribe(result => this.gotoLogin());
  }

  gotoLogin() {
    this.router.navigateByUrl("/login");
  }

  ngOnInit(): void {
    this.userservice.getUser().subscribe(data => {
      this.users = data;
    });
  }
  mailtxt: any = "";
  temp = false;
  mailCheck() {
    console.log(this.temp);
    console.log(this.mailtxt);
    for (let i = 0; i < this.users.length; i++) {
      console.log(this.users[i].email_id);
      if (this.mailtxt == this.users[i].email_id) {
        this.temp = true;
        this.mailtxt="";
        console.log(this.temp);
        break
      }
    }

  }
  req_flag:boolean=false;
  req(val:any){
    if(this.val.length<1){
      this.req_flag=true;
    }
  }


}
