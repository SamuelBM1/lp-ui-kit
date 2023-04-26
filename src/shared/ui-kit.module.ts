import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LpButtonComponent } from './ui-kit/lp-button/lp-button.component';
import { LpLoaderComponent } from './ui-kit/lp-loader/lp-loader.component';
import { LpInputComponent } from './ui-kit/lp-input/lp-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LpSidebarNotificationComponent } from './ui-kit/lp-sidebar-notification/lp-sidebar-notification.component';
import { LpIconComponent } from './ui-kit/lp-icon/lp-icon.component';
import { LpSelectComponent } from './ui-kit/lp-select/lp-select.component';
import { LpChipsComponent } from './ui-kit/lp-chips/lp-chips.component';
import { LpModalComponent } from './ui-kit/lp-modal/lp-modal.component';
import { LpZipModalComponent } from './ui-kit/lp-zip-modal/lp-zip-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LpHeaderComponent } from './ui-kit/lp-header/lp-header.component';
import { LpBodyTextComponent } from './ui-kit/lp-body-text/lp-body-text.component';



@NgModule({
  declarations: [
    LpButtonComponent,
    LpLoaderComponent,
    LpInputComponent,
    LpSidebarNotificationComponent,
    LpIconComponent,
    LpSelectComponent,
    LpChipsComponent,
    LpModalComponent,
    LpZipModalComponent,
    LpHeaderComponent,
    LpBodyTextComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    LpButtonComponent,
    LpLoaderComponent,
    LpInputComponent,
    LpSidebarNotificationComponent,
    LpIconComponent,
    LpSelectComponent,
    LpModalComponent,
    LpZipModalComponent,
    LpHeaderComponent,
    LpBodyTextComponent
  ]
})
export class UiKitModule { }
