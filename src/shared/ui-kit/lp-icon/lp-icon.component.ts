import { Component, Input, OnInit } from "@angular/core";

@Component({
	selector: "lp-icon",
	templateUrl: "./lp-icon.component.html",
	styleUrls: ["./lp-icon.component.scss"],
})
export class LpIconComponent implements OnInit {
	@Input() Icon:
		| "x"
		| "error"
		| "success"
		| "warning"
		| "arrow-left"
		| "arrow-right"
		| "bank-government"
		| "callout"
		| "check"
		| "chevron-down"
		| "chevron-right"
		| "coins"
		| "delivery"
		| "delivery-2"
		| "error-circled"
		| "government-capitol"
		| "heart"
		| "image"
		| "invalid-email"
		| "invalid-zip-code"
		| "like"
		| "lock"
		| "message-call"
		| "mobile"
		| "monitor"
		| "mouse"
		| "notepad"
		| "paper"
		| "person"
		| "shopping-cart"
		| "star"
		| "verify"
		| "wifi" = "x";

	@Input() Width: string = "26px";
	@Input() Height: string = "26px";
	@Input() Color: "white" | "gray" | "orange" | "light-gray" = "gray";

	constructor() {}
	icons: { [key: string]: string } = {
		x: "shared/ui-kit/icons/close.svg",
		error: "shared/ui-kit/icons/error.svg",
		success: "shared/ui-kit/icons/success.svg",
		warning: "shared/ui-kit/icons/warning.svg",
		"arrow-left": "shared/ui-kit/icons/arrow-left.svg",
		"arrow-right": "shared/ui-kit/icons/arrow-right.svg",
		"bank-government": "shared/ui-kit/icons/bank-government.svg",
		callout: "shared/ui-kit/icons/callout.svg",
		check: "shared/ui-kit/icons/check.svg",
		"chevron-down": "shared/ui-kit/icons/chevron-down.svg",
		"chevron-right": "shared/ui-kit/icons/chevron-right.svg",
		coins: "shared/ui-kit/icons/coins.svg",
		delivery: "shared/ui-kit/icons/delivery.svg",
		"delivery-2": "shared/ui-kit/icons/delivery-2.svg",
		"error-circled": "shared/ui-kit/icons/error-circled.svg",
		"government-capitol": "shared/ui-kit/icons/government-capitol.svg",
		heart: "shared/ui-kit/icons/heart.svg",
		image: "shared/ui-kit/icons/image.svg",
		"invalid-email": "shared/ui-kit/icons/invalid-email.svg",
		"invalid-zip-code": "shared/ui-kit/icons/invalid-zip-code.svg",
		like: "shared/ui-kit/icons/like.svg",
		lock: "shared/ui-kit/icons/lock.svg",
		"message-call": "shared/ui-kit/icons/message-call.svg",
		mobile: "shared/ui-kit/icons/mobile.svg",
		monitor: "shared/ui-kit/icons/monitor.svg",
		mouse: "shared/ui-kit/icons/mouse.svg",
		notepad: "shared/ui-kit/icons/notepad.svg",
		paper: "shared/ui-kit/icons/paper.svg",
		person: "shared/ui-kit/icons/person.svg",
		"shopping-cart": "shared/ui-kit/icons/shopping-cart.svg",
		star: "shared/ui-kit/icons/star.svg",
		verify: "shared/ui-kit/icons/verify.svg",
		wifi: "shared/ui-kit/icons/wifi.svg",
	};

	ngOnInit(): void {}
}
