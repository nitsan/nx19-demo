import { Injectable, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppsManagerService {
 private outletUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
 private dynamicContent: BehaviorSubject<ViewContainerRef | null> = new BehaviorSubject<ViewContainerRef | null>(null);
  event$ = this.outletUrl.asObservable();
  event2$ = this.dynamicContent.asObservable();

  setOutletUrl(val:string) {
    this.outletUrl.next(val);
  }

  setDynamicContent(val:ViewContainerRef) {
    this.dynamicContent.next(val);
  }
}
