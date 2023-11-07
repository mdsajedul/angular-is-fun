import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user = {
    name: '',
    age: 0,
    gender: '',
    basicInfo: '',
    blood:''
  };
  userList: any[] = [];

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService.addNewUser(this.user.name, this.user.age, this.user.blood, this.user.gender, this.user.basicInfo);
    this.user = { name: '', age: 0, blood: '', gender: '', basicInfo: '' };
    this.refreshUserList()
  }

  refreshUserList() {
    this.userList = this.userService.getAllUsers();
  }
}
