import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RemoteEntryComponent
      },
      {
        path: '',
        outlet: 'inner',
        loadChildren: () =>
          import('questionnaire/Routes').then((m) => m.remoteRoutes),
      }
    ]
  },
];
