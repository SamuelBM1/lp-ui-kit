import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  buttons: {type: "basic" | "outlined" | "cta" | "cta-outlined" | "3D", label: string}[] = [
    {
      type: "basic",
      label: "Basic"
    },
    {
      type: "cta",
      label: "CTYA"
    },
    {
      type: "outlined",
      label: "Outlined"
    },
    {
      type: "cta-outlined",
      label: "CTA Outlined"
    },
    {
      type: "3D",
      label: "3D"
    },
  ]
}
