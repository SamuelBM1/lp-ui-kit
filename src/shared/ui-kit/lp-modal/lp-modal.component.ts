import { style, transition, trigger, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lp-modal',
  templateUrl: './lp-modal.component.html',
  styleUrls: ['./lp-modal.component.scss'],
  animations: [
		trigger("modalAnimation", [
			transition(":enter", [
				style({
					opacity: 0,
          top: '-100%',
				}),
				animate(
					"550ms linear",
					style({
						opacity: 1,
            top: '0%'
					})
				)
			]),
			transition(":leave", [
				style({
					opacity: 1,
          top: '0%'
				}),
				animate(
					"550ms linear",
					style({
						opacity: 0,
            top: '-100%'
					})
				)
			])
		])
	]
})
export class LpModalComponent implements OnInit {

  @Input() Show_Modal: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
