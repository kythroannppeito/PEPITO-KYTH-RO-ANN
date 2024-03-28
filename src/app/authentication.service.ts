import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  number = 1;
  canProceed = false;

  constructor() {}

  login(username: string, password: string): Observable<any> {

    if (username === 'your_username' && password === 'your_password') {
      return of({ success: true, message: 'Login successful' });
    } else {
      return of({ success: false, message: 'Invalid credentials' });
    }
  }

  canActivate() {
    return this.canProceed;
  }

  fetchData1(): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.number);
      }, 5000);
    });
  }

  addNumber(number: any) {
    this.number = number;
  }
}
