import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SampleService } from '../sample.service';
import { Anime } from './model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  animes: Anime[] = [];
  constructor(private router: Router, private authenticationService: AuthenticationService, private sampleService: SampleService){ }

  ngOnInit() {
    this.fetchAnimeData()
    }
async fetchAnimeData(){
  await this.sampleService.getPopulation().subscribe((data: Anime[]) => {
    this.animes = data;
    console.log(this.animes)
});

  }

  async logOut(){
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
  }

}
