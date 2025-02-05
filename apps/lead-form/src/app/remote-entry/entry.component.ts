import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from './lead-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, LeadFormComponent],
  selector: 'app-lead-form-entry',
  template: `<lf-welcome></lf-welcome>`,
})
export class RemoteEntryComponent {}
