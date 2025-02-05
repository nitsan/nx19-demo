import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppsManagerService } from 'mylib';

@Component({
  selector: 'coverage-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <style>
      html {
        -webkit-text-size-adjust: 100%;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
        'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
        'Noto Color Emoji';
        line-height: 1.5;
        tab-size: 4;
        scroll-behavior: smooth;
      }

      body {
        font-family: inherit;
        line-height: inherit;
        margin: 0;
      }

      h1,
      h2,
      p,
      pre {
        margin: 0;
      }

      *,
      ::before,
      ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }

      .container {
        margin-left: auto;
        margin-right: auto;
        max-width: 768px;
        padding-bottom: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        color: rgba(55, 65, 81, 1);
        width: 100%;
      }

      .welcome {
        margin-top: 2.5rem;
      }

      .welcome h1 {
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.025em;
        line-height: 1;
      }

      .welcome span {
        display: block;
        font-size: 1.875rem;
        font-weight: 300;
        line-height: 2.25rem;
        margin-bottom: 0.5rem;
      }
    </style>
    <div class="wrapper">
      <div class="container">
        <div class="welcome">
          <h1>
            <span> Hello there, </span>
            Welcome coverage-customization 👋
          </h1>
        </div>
        <div>
          <button (click)="clicked('questionnaire/clu')">click to load questionnaire clu</button>
        </div>
        <div>
          <button (click)="clicked('questionnaire')">click to load regular questionnaire</button>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class CoverageComponent {
  constructor(private appsManagerService: AppsManagerService) {
  }

  clicked(outletUrl: string) {
    this.appsManagerService.setOutletUrl(outletUrl);
  }
}
