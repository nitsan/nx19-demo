import { ShellComponent } from './shell.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'coverage-customization',
    loadChildren: () =>
      import('coverage-customization/Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'questionnaire',
    outlet:'modal',
    loadChildren: () =>
      import('questionnaire/Routes').then((m) => m.remoteRoutes),
  },
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
    component: ShellComponent,
  },
  {
    path: '**',
    component: ShellComponent,
  },
];
