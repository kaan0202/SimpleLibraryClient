import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LayoutComponent,HeaderComponent,FooterComponent,SidebarComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    LayoutComponent,HeaderComponent,FooterComponent,SidebarComponent
  ]
})
export class LayoutModule { }
