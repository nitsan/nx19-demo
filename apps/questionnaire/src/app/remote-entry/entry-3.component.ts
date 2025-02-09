import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-questionnaire-dynamic',
  template: `<div> <h2 style="color: red;">This content is coming from QUESTIONNAIRE module </h2></div>`,

})
export class RemoteComponent {
  constructor() {}
}
