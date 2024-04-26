import { Component } from '@angular/core';
import { DividerComponent } from '../../components/divider/divider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DividerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
