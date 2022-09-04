import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private afAuth: AngularFireAuth
  ) { }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    const user = await this.afAuth.currentUser;
    let isAuthenticated: boolean = false
    let superList: string[] = ['eakonnick25@mpcstudent.com','cvbethel24@mpcstudent.com','apgilmore25@mpcstudent.com', "agilmore1064@gmail.com"]
    if (user && user.email) {
      if (user.email.search("@mtparanschool") != -1 || superList.includes(user.email)) {
        isAuthenticated = true
        }
    } else {
        isAuthenticated = false
    }

    if (!isAuthenticated) {
      alert('You must be authenticated in order to access this page');
    }
    return isAuthenticated;
  }
}
