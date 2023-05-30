import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePostComponent } from './pagine/active-post/active-post.component';
import { HomeComponent } from './pagine/home/home.component';
import { InactivePostComponent } from './pagine/inactive-post/inactive-post.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'active',
    component: ActivePostComponent
  },
  {
    path: 'inactive',
    component: InactivePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

