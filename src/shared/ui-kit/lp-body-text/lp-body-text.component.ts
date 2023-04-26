import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-body-text',
  templateUrl: './lp-body-text.component.html',
  styleUrls: ['./lp-body-text.component.scss'],
})
export class LpBodyTextComponent {
  @Input() Color: string = '#696969';
  @Input() Size: 'normal' | 'small' | 'tiny' = 'normal';
  @Input() Text_Align: 'left' | 'right' | 'center' | 'justify' = 'left';
}
