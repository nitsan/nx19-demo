import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-my-ui-lib',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-ui-lib.component.html',
  styleUrl: './my-ui-lib.component.css',
})
export class MyUiLibComponent {}
