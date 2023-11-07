import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class UserService {
    addNewUser (name:string,age:number,blood:string,gender:string,basicInfo:string){
        let userList = this.getAllUsers();
        const newUser = {name,age,blood,gender,basicInfo};
        userList.push(newUser);
        localStorage.setItem('users',JSON.stringify(userList))
    }

    getAllUsers (){
        const users = localStorage.getItem('users');
        if(users!==null){
            const userList = JSON.parse(users);
            return userList
        }
        return []
    }
}