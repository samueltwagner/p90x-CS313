import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { p90xComponent } from './p90x/p90x.component';
import { p90xEditComponent } from './p90x/p90x-edit/p90x-edit.component';
import { p90xDetailComponent } from './p90x/p90x-detail/p90x-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/p90x', pathMatch: 'full'},
    { path: 'p90x', component: p90xComponent, children: [
      { path: 'new', component: p90xEditComponent},
      { path: ':id', component: p90xDetailComponent},
      { path: ':id/edit', component: p90xEditComponent},
    ]},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
