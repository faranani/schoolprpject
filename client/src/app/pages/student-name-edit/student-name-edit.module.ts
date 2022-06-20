import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentNameEditComponent } from './student-name-edit.component';
import { StudentNameEditRoutingModule } from './student-name-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentNameEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentNameEditComponent
  ]
})
export class StudentNameEditModule { }
