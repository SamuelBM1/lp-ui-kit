import { Component, Input } from '@angular/core';

@Component({
  selector: 'lp-header',
  templateUrl: './lp-header.component.html',
  styleUrls: ['./lp-header.component.scss'],
})
export class LpHeaderComponent {
  @Input() Color: string = '#696969';
  @Input() Header_Type: "header-1" | "header-2" | "header-3" | "header-4" = "header-1";
}
