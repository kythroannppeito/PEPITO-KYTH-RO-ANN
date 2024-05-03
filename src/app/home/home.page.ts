import { Component } from '@angular/core';
import { User, iUser } from './home.model';
import { Router } from '@angular/router';
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
  UserList: iUser[] = [];
  Users: User = new User();
  constructor(private router: Router, private home: HomeService) {

  }
  ionViewWillEnter(){
    this.user();
  }
  update(user: User){
    this.router.navigate(['update', user.id]);
    this.home.newList = this.UserList;
    this.home.edit(user);
  }
  async delete(user: User){
   const confirmation = confirm('Are you sure you want to delete this series?');
   if(!confirmation){
    return;

   }
   await this.home.tryDelete(user);
    this.home.presentAlert('Success', 'Deleted Successfully');
    this.user();
    this.Users = new User();
  }
  create(){

    this.router.navigate(['create']);

  }
  async user(){
    this.UserList = await this.home.getUsers();
    
  }
}
