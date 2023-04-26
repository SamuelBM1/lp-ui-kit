import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  openGithub() {
      window.open("https://github.com/SamuelBM1/sh-landing-pages-ui-kit/tree/master/src/shared", "_blank");
  }
}
