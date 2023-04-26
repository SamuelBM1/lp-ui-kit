import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStartedComponent } from './pages/get-started/get-started.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { IconsComponent } from './pages/icons/icons.component';
import { InputsComponent } from './pages/inputs/inputs.component';
import { DialogsComponent } from './pages/dialogs/dialogs.component';

const routes: Routes = [
  { path: "", component: GetStartedComponent },
  { path: "buttons", component: ButtonsComponent },
  { path: "loader", component: LoaderComponent },
  { path: "icons", component: IconsComponent },
  { path: "inputs", component: InputsComponent },
  { path: "dialogs", component: DialogsComponent },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
