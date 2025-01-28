import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'questionnaire',
    loadChildren: () =>
      import('questionnaire/Routes').then((m) => m.remoteRoutes),
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
