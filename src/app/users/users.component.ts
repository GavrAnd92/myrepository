import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';//add

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]//add
})
export class UsersComponent implements OnInit {


  username: string ="";
  response: any;

  constructor(private userService: UserService) { }


  search(){
    this.response = this.userService.getUser(this.username);
  }

  ngOnInit(): void {
  }

}
