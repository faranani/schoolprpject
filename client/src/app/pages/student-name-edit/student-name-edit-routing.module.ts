import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentNameEditComponent } from './student-name-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StudentNameEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentNameEditRoutingModule { }
