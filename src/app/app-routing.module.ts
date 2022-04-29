import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"about", component: AboutComponent},
  {path:"", component: SideMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
