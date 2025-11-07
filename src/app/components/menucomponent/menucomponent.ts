import { Component } from '@angular/core';
import { Router, Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { provideRouter } from '@angular/router';

@Component({
  selector: 'app-menucomponent',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menucomponent.html',
  styleUrls: ['./menucomponent.css'],
})
export class Menucomponent {
  public routes: Route[] = [];
  constructor(private router: Router) {
    // Populate routes from the router configuration so template can show them
    this.routes = this.router.config;
  }
  
  // Navigate programmatically to the app root (home)
  public goHome(): void {
    this.router.navigateByUrl('/').catch(err => console.error('Navigation error', err));
  }
}
