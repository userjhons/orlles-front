import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';
import { provideHttpClient } from '@angular/common/http';
import {LoginComponent} from './auth/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  imports: [
    RouterOutlet,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    LoginComponent
  ]
})
export class AppComponent {
  title = 'proyectosoluciones';
}
