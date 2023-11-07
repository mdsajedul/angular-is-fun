import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  @Input() userList: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userList = this.userService.getAllUsers();
  }
}
