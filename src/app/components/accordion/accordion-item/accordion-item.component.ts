import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { ionCaretUp } from '@ng-icons/ionicons';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.css',
  viewProviders: [
    provideIcons({
      ionCaretUp,
    }),
  ],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0px',
          overflow: 'hidden',
          opacity: 0,
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial <=> final', animate('200ms')),
    ]),
    trigger('rotatedState', [
      state(
        'default',
        style({
          transform: 'rotate(0deg)',
        })
      ),
      state(
        'rotated',
        style({
          transform: 'rotate(180deg)',
        })
      ),
      transition('default <=> rotated', animate('250ms')),
    ]),
  ],
})
export class AccordionItemComponent {
  @Input() title: string = '';
  showBody = false;

  toggleBody() {
    this.showBody = !this.showBody;
  }
}
