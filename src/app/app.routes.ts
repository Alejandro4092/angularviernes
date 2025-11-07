import { Routes, RouterModule } from '@angular/router';


export const appRoutes: Routes = [
	{ path: '', loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent) },
	{ path: 'menu', loadComponent: () => import('./components/menu/menu.component').then(m => m.MenuComponent) }
];

