import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser, heroComputerDesktop, heroIdentification } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  viewProviders:[provideIcons({ heroUser, heroComputerDesktop, heroIdentification })]
})
export class MainLayoutComponent {
  isLogged: boolean = false;
}
