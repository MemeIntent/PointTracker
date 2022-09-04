import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class SuperAuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    let isSuperAuthenticated: boolean = false
    let superList: string[] = ['eakonnick25@mpcstudent.com','cvbethel24@mpcstudent.com',"agilmore1064@gmail.com"]
    if (user && user.email) {
      if (superList.includes(user.email)) {
        isSuperAuthenticated = true
      }
    } else {
      isSuperAuthenticated = false
    }

    if (!isSuperAuthenticated) {
      alert('You must be authenticated in order to access this page');
    }
    return isSuperAuthenticated;
  }
}
