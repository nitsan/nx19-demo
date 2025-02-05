import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsManagerService } from 'mylib';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-questionnaire-modal',
  styleUrl: './modal.scss',
  templateUrl: './modal.html',

})
export class ModalComponent {
  constructor(private appsManagerService: AppsManagerService) {}

  closeAux() {
    this.appsManagerService.setOutletUrl('');
  }
}
