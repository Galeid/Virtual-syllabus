import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  ionLogoGithub,
  ionLogIn,
  ionDesktopOutline,
  ionReaderOutline,
} from '@ng-icons/ionicons';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  viewProviders: [
    provideIcons({
      ionLogIn,
      ionDesktopOutline,
      ionReaderOutline,
      ionLogoGithub,
    }),
  ],
})
export class MainLayoutComponent {
  isLogged: boolean = false;

  constructor(public router: Router) {}
}
