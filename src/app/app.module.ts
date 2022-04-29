import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SideMenuComponent } from './pages/side-menu/side-menu.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SideMenuComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path:"", pathMatch: "full", redirectTo: '/enter-leave'},
      {path:"about", component: AboutComponent, data: {animation: "togglePage"}},
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
