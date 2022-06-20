// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CourseEditComponent} from './pages/course-edit/course-edit.component';
import { CourseListComponent} from './pages/course-list/course-list.component';
import { LoginEditComponent} from './pages/login-edit/login-edit.component';
import { LoginListComponent} from './pages/login-list/login-list.component';
import { StudentNameEditComponent} from './pages/student-name-edit/student-name-edit.component';
import { StudentNameListComponent} from './pages/student-name-list/student-name-list.component';
import { SubjectEditComponent} from './pages/subject-edit/subject-edit.component';
import { SubjectListComponent} from './pages/subject-list/subject-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'courses/:id',  loadChildren: './pages/course-edit/course-edit.module#CourseEditModule' , canActivate: [AuthGuard] },
    { path: 'courses',  loadChildren: './pages/course-list/course-list.module#CourseListModule' , canActivate: [AuthGuard] },
    { path: 'logins/:id',  loadChildren: './pages/login-edit/login-edit.module#LoginEditModule' , canActivate: [AuthGuard] },
    { path: 'logins',  loadChildren: './pages/login-list/login-list.module#LoginListModule' , canActivate: [AuthGuard] },
    { path: 'studentnames/:id',  loadChildren: './pages/student-name-edit/student-name-edit.module#StudentNameEditModule' , canActivate: [AuthGuard] },
    { path: 'studentnames',  loadChildren: './pages/student-name-list/student-name-list.module#StudentNameListModule' , canActivate: [AuthGuard] },
    { path: 'subjects/:id',  loadChildren: './pages/subject-edit/subject-edit.module#SubjectEditModule' , canActivate: [AuthGuard] },
    { path: 'subjects',  loadChildren: './pages/subject-list/subject-list.module#SubjectListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
