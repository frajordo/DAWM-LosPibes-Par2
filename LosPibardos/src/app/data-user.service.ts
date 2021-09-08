import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class DataUserService {
  username: string;
  public isUserLoggedIn: BehaviorSubject<boolean>;
  
  constructor(private cookieService:CookieService) { 
    this.username=""
    if (this.cookieService.get("username")!=""){
      this.isUserLoggedIn=new BehaviorSubject<boolean>(true);
    } else{
      this.isUserLoggedIn=new BehaviorSubject<boolean>(false);
    }
  }
}
