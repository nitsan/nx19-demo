import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { ModalComponent } from './entry-2.component';
import { RemoteComponent } from './entry-3.component';

export const remoteRoutes: Route[] = [
    {
      path: '',
      component: RemoteEntryComponent,
      children: []
    },
    { path: 'clu', component: ModalComponent },
    { path: 'test', component: RemoteComponent }, // without it entry-3 is missing from files map and the build fails
  ];
