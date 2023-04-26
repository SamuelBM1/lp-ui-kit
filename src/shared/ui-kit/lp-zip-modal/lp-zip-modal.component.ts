import { style, transition, trigger, animate } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
	selector: "lp-zip-modal",
	templateUrl: "./lp-zip-modal.component.html",
	styleUrls: ["./lp-zip-modal.component.scss"]
})
export class LpZipModalComponent implements OnInit {
	constructor(private formBuilder: FormBuilder) {}

	@Output() Close_Modal = new EventEmitter();
	@Output() Submit = new EventEmitter();
	@Input() Show_Modal: boolean = false
	@Input() Zip_Code: number = -1;

	personalInfoForm = this.formBuilder.group({
		zip_code: this.Zip_Code,
	});
	zip_code: string = "";
	button_enabled: boolean = false;

	ngOnInit(): void {}

	closeModal() {
		this.Show_Modal = false
		this.Close_Modal.emit();
	}

	ngOnChanges() {
		this.personalInfoForm = this.formBuilder.group({
			zip_code: this.Zip_Code,
		});
	}

	submit() {
		if (this.button_enabled) {
			this.personalInfoForm = this.formBuilder.group({
				zip_code: this.Zip_Code,
			});
			this.Submit.emit({
				zip_code: this.personalInfoForm.value.zip_code,
			});
		}
	}

	changeZipCode(event: Number) {
		event = +event;
		let zip_code = event.toString();
		this.button_enabled = zip_code.length === 5;
	}
}
