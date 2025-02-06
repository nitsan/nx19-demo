import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AppsManagerService } from 'mylib';
import { loadRemoteModule } from '@nx/angular/mf';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  exportAs: 'appRoot',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public appsManagerService: AppsManagerService
  ) {}

  ngOnInit(): void {
    this.appsManagerService.event$.subscribe((outletUrl: string) => {
      if (outletUrl) {
        this.router.navigate([
          {
            outlets: {
              modal: outletUrl,
            },
          },
        ]);
      } else{
        this.router.navigate([{ outlets: { modal: null } }]);
      }
    });
    this.appsManagerService.event2$.subscribe(async(element) => {

      if (element) {
        const module = await loadRemoteModule('questionnaire', './EntryComponent');
        const component = module.RemoteComponent;
        element.createComponent(component);
      }

    });
  }

  title = 'shell';
}
