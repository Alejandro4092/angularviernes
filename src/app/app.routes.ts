import { Routes, RouterModule } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Personascomponent } from './components/personascomponent/personascomponent';

// Use direct component reference for root so clicking the menu link navigates to Home
export const appRoutes: Routes = [
  { path: '', component: Homecomponent },
  { path: 'personas', component: Personascomponent }
];

export const routes = appRoutes;

