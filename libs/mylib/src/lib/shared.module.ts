import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppsManagerService } from './app-manager.service';

@NgModule({
  imports: [CommonModule],
  providers: [AppsManagerService],
})
export class SharedServicesModule {}