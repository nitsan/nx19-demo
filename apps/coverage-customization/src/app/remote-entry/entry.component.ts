import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoverageComponent } from './coverage.component';

@Component({
  standalone: true,
  imports: [CommonModule, CoverageComponent],
  selector: 'app-coverage-customization-entry',
  template: `<coverage-welcome></coverage-welcome>`,
})
export class RemoteEntryComponent {}
