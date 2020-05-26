import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface Credentials {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  credentials: Credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  create() {
    this.authService.createOrUpdate(this.credentials).subscribe(result => {
      return result;
    });
  }

  ngOnInit() {}
}
