import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowRedo } from '@ng-icons/ionicons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  viewProviders: [
    provideIcons({
      ionArrowRedo,
    }),
  ],
})
export class LoginComponent {}
