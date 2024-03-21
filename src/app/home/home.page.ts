
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { SampleServiceService } from '../sample-service.service';
import { University } from '../model/model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  universities : University[] = [];

  constructor(private sampleService: SampleServiceService) {
  }

  ngOnInit(): void {
    this.sampleService.getUniversities().subscribe(item => {
      this.universities = item;
    })
  }

}
