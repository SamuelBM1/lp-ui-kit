import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
	selector: "lp-select",
	templateUrl: "./lp-select.component.html",
	styleUrls: ["./lp-select.component.scss"],
})
export class LpSelectComponent implements OnInit {
	@Input() Label: string = "";

	@Input() Id: string = "";
	@Input() Placeholder: string = "";
	@Input() Disabled: boolean = false;

	@Input() FormControl: FormControl = new FormControl();
	@Input() FormControlName: string = "";

	@Input() Errors: boolean = false;
	@Input() ErrorMsg: string = "";

	@Input() Width: string = "100%";
	@Input() Height: string = "42px";
	@Input() Options: { label: string; value: string }[] = [];

	@Output() Change = new EventEmitter();

	constructor() {}

	ngOnInit(): void {}

	ngOnChanges() {}

	change(Event: string | number) {
		this.Change.emit(Event);
	}
}
