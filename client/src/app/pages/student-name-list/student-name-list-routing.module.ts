import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentNameListComponent } from './student-name-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentNameListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentNameListRoutingModule { }
