import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'coverage-customization',
    loadChildren: () =>
      import('coverage-customization/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'lead-form',
    loadChildren: () => import('lead-form/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
