import { style, transition, trigger,animate } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
	selector: "lp-button",
	templateUrl: "./lp-button.component.html",
	styleUrls: ["./lp-button.component.scss"],
	animations: [
		trigger("modalAnimation", [
			transition(":enter", [
				style({
					opacity: 0
				}),
				animate(
					"550ms linear",
					style({
						opacity: 1
					})
				)
			]),
			transition(":leave", [
				style({
					opacity: 1
				}),
				animate(
					"5500ms linear",
					style({
						opacity: 0
					})
				)
			])
		])
	]
})
export class LpButtonComponent implements OnInit {
	constructor() {}

	// STYLES
	@Input() Type: "button" | "menu" | "reset" | "submit" | "close" = "submit";
	@Input() Style: "basic" | "outlined" | "cta" | "cta-outlined" | "3D" =
		"basic";
	@Input() Height: string = "46px";
	@Input() Width: string = "100%";
	@Input() Font_Size: string = "16px";

	// FUNCTIONS
	@Input() Disabled: boolean = false;
	@Input() Icon_Position: "left" | "right" = "left";
	@Input() Icon: string | undefined;
	@Input() Loading: boolean = false;

	// EVENTS
	@Output() Click = new EventEmitter();

	x_icon: string = "../icons/close.svg";

	ngOnInit(): void {}

	click() {
		if (!this.Disabled) {
			this.Click.emit();
		}
	}
}
