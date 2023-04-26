import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-sidebar",
	templateUrl: "./sidebar.component.html",
	styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {

	ui_kit_components: {
		id: number;
		label: string;
		url: string;
		active: boolean;
	}[] = [
		{
			id: 1,
			label: "Get Started",
			url: "/",
			active: false,
		},
		{
			id: 2,
			label: "Buttons",
			url: "/buttons",
			active: false,
		},
		{
			id: 3,
			label: "Inputs",
			url: "/inputs",
			active: false,
		},
		{
			id: 4,
			label: "Icons",
			url: "/icons",
			active: false,
		},
		{
			id: 6,
			label: "Loader",
			url: "/loader",
			active: false,
		},
	];
	url: string = "";

	constructor(private router: Router) {
		this.router.events.subscribe((e: any) => {
			if (e.url) {
				this.url = e.url;
				for (const component of this.ui_kit_components) {
					component.active = false;
				}
				let index = this.ui_kit_components.findIndex((component) => {
					return component.url === this.url;
				});
				if (index != -1) {
					this.ui_kit_components[index].active = true;
				}
			}
		});
	}

	ngOnInit() {}

	navigate(id: number, url: string) {
		for (const component of this.ui_kit_components) {
			component.active = false;
		}
		let index = this.ui_kit_components.findIndex((component) => {
			return component.id === id;
		});

		if (index != -1) {
			this.ui_kit_components[index].active = true;
			this.router.navigate([url]);
			console.log(this.router.navigate);
		}
	}
}
