import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  standalone: true,
  imports: [],
  templateUrl: './divider.component.html',
  styleUrl: './divider.component.css',
})
export class DividerComponent {
  @Input() skew: 'left' | 'right' | 'default' = 'left';
  @Input() wave: boolean = false;
  @Input() topBackground: string = '';
  @Input() bottomBackground: string = '';
}
