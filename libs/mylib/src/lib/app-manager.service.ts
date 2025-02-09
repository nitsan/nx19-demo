import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppsManagerService {
 private outletUrl: BehaviorSubject<string> = new BehaviorSubject<string>('');
  event$ = this.outletUrl.asObservable();

  setOutletUrl(val:string) {
    this.outletUrl.next(val);
  }
}
