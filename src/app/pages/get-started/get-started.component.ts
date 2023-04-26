import { Component } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent {

  openGithub() {
    window.open("https://github.com/SamuelBM1/sh-landing-pages-ui-kit/tree/master/src/shared", "_blank");
  }

}
