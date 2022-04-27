import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    LogoComponent,
    FooterComponent,
    HeaderComponent
  ],
  exports: [
    LogoComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ComponentsModule { }
