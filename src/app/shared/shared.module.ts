import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';

@NgModule({
  declarations: [ToolbarComponent, EventPreviewComponent],
  imports: [CommonModule, RouterModule],
  exports: [ToolbarComponent],
})
export class SharedModule {}
