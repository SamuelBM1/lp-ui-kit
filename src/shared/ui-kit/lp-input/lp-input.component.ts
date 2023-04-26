import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: "lp-input",
	templateUrl: "./lp-input.component.html",
	styleUrls: ["./lp-input.component.scss"],
})
export class LpInputComponent implements OnInit {
	@Input() Label: string = "";
	@Input() Type: "text" | "number" | "date" = "text";

	@Input() Name: string = "";
	@Input() Id: string = "";
	@Input() Placeholder: string = "";
	@Input() Disabled: boolean = false;

	@Input() FormControl: FormControl = new FormControl();
	@Input() FormControlName: string = "";

	@Input() Errors: boolean = false;
	@Input() ErrorMsg: string = "";

	@Input() Width: string = "100%";
	@Input() Height: string = "42px";

	@Output() Change = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges() {}

	change(Event: string | number) {
		this.Change.emit(Event);
	}
}
