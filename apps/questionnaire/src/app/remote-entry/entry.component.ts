import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionnaireComponent } from './questionnaire.component';

@Component({
  standalone: true,
  imports: [CommonModule, QuestionnaireComponent],
  selector: 'app-questionnaire-entry',
  template: `<qu-welcome></qu-welcome>`,
})
export class RemoteEntryComponent {
}
