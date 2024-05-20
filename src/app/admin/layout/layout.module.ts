import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [
    LayoutComponent,HeaderComponent,FooterComponent,SidebarComponent, RightSidebarComponent
  ],
  imports: [
    CommonModule,RouterModule,MatButtonModule,MatSidenavModule,MatListModule
  ],
  exports:[
    LayoutComponent,HeaderComponent,FooterComponent,SidebarComponent
  ]
})
export class LayoutModule { }
