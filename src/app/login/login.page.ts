import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})




export class LoginPage implements OnInit {
  userName: string = "";
  password: string = "";
  constructor(private alertController: AlertController,private toastController: ToastController, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.userName = '';
    this.password = '';
  }




  async logIn(){

    const credentials = [
      { username: 'admin', password: '111' },
      { username: 'user', password: '222' },
    
    ];





    const UserExist = credentials.find(user => user.username === this.userName && user.password === this.password);
    if (UserExist) {
      localStorage.setItem('username',this.userName);
      localStorage.setItem('password',this.password);
    const alert = await this.alertController.create({
  
      subHeader: 'LOG IN SUCCESSFULLY',
      buttons: ['OK']
    });





    await alert.present();
    this.authenticationService.canProceed = true;
    this.router.navigate(['tabs/dashboard']);
  }else{
    const toast = await this.toastController.create({
      message: 'Login Failed',
    });




    toast.present();
  }




}
}
