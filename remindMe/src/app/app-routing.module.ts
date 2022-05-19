import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { HomeComponent } from './home/home.component';
import { LogRegComponent } from './log-reg/log-reg.component';

const routes: Routes = [
  {
    path: "", component: LogRegComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "event", component: EventsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
