import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';


@Component({
  templateUrl: 'another-page-with-fetch.html'
})
export class AnotherPageWithFetch implements OnInit {
    test: any;
    number: any;
    isLoading = false;
    isHide = true;
    loadingText = "...loading";
    constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute) { 
    }
  
    ngOnInit() {
        this.test = this.route.snapshot.paramMap.get('test');
        console.log(this.test);
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
 