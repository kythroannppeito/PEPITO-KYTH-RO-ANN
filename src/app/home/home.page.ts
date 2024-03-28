import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  login() {
    this.authenticationService.login(this.username, this.password).subscribe(
      (result: any) => {
        if (result) {

          this.router.navigate(['/another']);
        
          this.presentToast('Authentication failed');
        }
      },
      (error) => {
    
        this.presentToast('An error occurred during login');
      }
    );
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
