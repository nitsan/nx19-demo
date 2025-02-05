import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsManagerService } from 'mylib';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-questionnaire-entry',
  template: `Questionnaire CLU component inside questionnaire
    <button (click)="closeAux()">close aux</button>`,
})
export class RemoteEntryComponent2 {
  constructor(private appsManagerService: AppsManagerService) {}

  closeAux() {
    this.appsManagerService.setOutletUrl('');
  }
}
