import { Component, OnInit } from '@angular/core';
import { User, iUser } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  users: User = new User();  
  id: any;
  constructor(private home: HomeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.sync(this.home.newList); 
  }

async update(){
  if(this.users.id ){
    await this.home.tryUpdate(this.users);
    this.home.presentAlert('success','Successfully Updated');
  }
  this.users = new User();
  this.router.navigate(['home']);
}
sync(users:iUser[]){
  users.forEach(user => {
    if(this.id == user.id ){
      this.users.id = user.id;
      this.users.title = user.title;
      this.users.date = user.date;
      this.users.actor = user.actor;
      this.users.genre = user.genre;
    }
  });

}
}

