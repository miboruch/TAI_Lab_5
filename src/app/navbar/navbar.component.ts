import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}

  logOut() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  ngOnInit() {}
}
