import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another-page',
  templateUrl: './another-page.page.html',
  styleUrls: ['./another-page.page.scss'],
})
export class AnotherPagePage implements OnInit {
  data: any;
  number: any;
  isLoading = false;
  isHide = true;
  loadingText = "...loading";
  constructor(private authenticationService: AuthenticationService) { 
    console.log(this.authenticationService.number)
  }

  ngOnInit() {
  }

  async incrementNo(){
    try {
      this.isLoading = true;
      this.number = await this.authenticationService.fetchData1();
      const nextNumber = this.number + 1;
      console.log(nextNumber);
      this.authenticationService.addNumber(nextNumber);
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

}
 