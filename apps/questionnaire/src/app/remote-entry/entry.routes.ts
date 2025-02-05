import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { ModalComponent } from './entry-2.component';

export const remoteRoutes: Route[] = [
    {
      path: '',
      component: RemoteEntryComponent,
      children: []
    },
    { path: 'clu', component: ModalComponent }
  ];
