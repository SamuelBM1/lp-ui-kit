import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {

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
