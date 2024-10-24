import { CommonModule } from '@angular/common';
import { iUser } from './../../interfaces/i-user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user!: iUser;

  constructor(private authSvc: AuthService) {}

  ngOnInit(): void {
    this.authSvc.user$.subscribe((userD) => {
      if (!userD) return;
      this.user = userD;
    });
  }
}
