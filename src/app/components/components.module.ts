import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UiKitModule } from 'src/shared/ui-kit.module';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { CodeBoxComponent } from './code-box/code-box.component';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    SubHeaderComponent,
    CodeBoxComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    UiKitModule
  ],
  exports: [ 
    SidebarComponent,
    HeaderComponent,
    SubHeaderComponent,
    CodeBoxComponent
   ]
})
export class ComponentsModule { }
