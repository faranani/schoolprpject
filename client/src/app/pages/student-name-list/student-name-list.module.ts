import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentNameListComponent } from './student-name-list.component';
import { StudentNameListRoutingModule } from './student-name-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    StudentNameListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    StudentNameListComponent
  ]
})
export class StudentNameListModule { }
