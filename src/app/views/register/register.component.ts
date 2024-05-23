import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionArrowRedo } from '@ng-icons/ionicons';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  viewProviders: [
    provideIcons({
      ionArrowRedo,
    }),
  ],
})
export class RegisterComponent {}
