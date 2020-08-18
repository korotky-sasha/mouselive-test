import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEventComponent } from './containers/add-event/add-event.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AddEventComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddEventsRoutingModule {}
