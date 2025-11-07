import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="main-menu">
      <ul>
        <li><a routerLink="/">Home</a></li>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
      </ul>
    </nav>
    <section>
      <h2>Menú</h2>
      <p>Contenido del menú.</p>
    </section>
  `,
  styles: [
    `
      .main-menu ul { list-style: none; padding: 0; display:flex; gap:12px; }
      .main-menu a { text-decoration: none; color: #1e90ff; }
      h2 { margin-top: 1rem; }
    `
  ]
})
export class MenuComponent {}
