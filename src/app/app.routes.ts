import { Routes, RouterModule } from '@angular/router';
import { Homecomponent } from './components/homecomponent/homecomponent';
import { Personascomponent } from './components/personascomponent/personascomponent';

export const appRoutes: Routes = [
  { path: '', component: Homecomponent },
  { path: 'personas', component: Personascomponent }
];

export const routes = appRoutes;

