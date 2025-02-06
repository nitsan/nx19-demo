import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
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
    .modal {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: left;
      border: rgb(227, 227, 227) 1px solid;
      background-color: white;
      border-radius: 0.3rem;
      overflow: auto;
      z-index: 2;
    }
    .content{
      height: 400px;
      width: 400px;
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
        <div>
          <button (click)="showDynamic()">click to questionnaire module no route change</button>
        </div>
      </div>
  
  <!-- *ngIf did not work because element has to exist in the DOM for the dynamic component to be created -->
      <div [hidden]="!display" class="modal content"> <h4>This modal is part of COVERAGE-CUSTOMIZATION module</h4>
            <div #dynamicContent></div>
             <h4>This button is part of COVERAGE-CUSTOMIZATION module</h4>
            <button (click)="display = false;"> close </button>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class CoverageComponent {
  constructor(private appsManagerService: AppsManagerService) {
  }

  display = false;

  clicked(outletUrl: string) {
    this.appsManagerService.setOutletUrl(outletUrl);
  }


  @ViewChild('dynamicContent', { read: ViewContainerRef }) dynamicContent!: ViewContainerRef;

  showDynamic() {
    this.display = true;
    this.appsManagerService.setDynamicContent(this.dynamicContent);
  }
}
