import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TesteComponent } from './teste/teste.component';
import { GridOverlayComponent } from './grid-overlay/grid-overlay.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TesteComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Isso é importante para que os componentes sejam acessíveis em outros módulos
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    TesteComponent
  ]
})
export class SharedModule { }
