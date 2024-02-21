import { routes } from './app.routes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { NavbarComponent } from "./sharepage/navbar/navbar.component";
import { FooterComponent } from "./sharepage/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet,RouterModule ,HomeComponent, NavbarComponent, FooterComponent]
})
export class AppComponent {
  title = 'website';
}
