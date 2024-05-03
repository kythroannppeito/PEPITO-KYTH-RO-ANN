import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
users: User = new User();
  constructor(private home: HomeService, private router: Router ) { }

  ngOnInit() {
  }

create(){

  if(!this.users.id){
    this.home.tryAdd(this.users);
    this.home.presentAlert('success','successfully create');

  }
  this.users = new User();
  this.router.navigate(['home']);
}

}
