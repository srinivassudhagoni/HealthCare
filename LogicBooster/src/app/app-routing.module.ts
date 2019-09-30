import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogicComponent } from './logic/logic.component';

const routes: Routes = [

  { path: '', component: LogicComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
