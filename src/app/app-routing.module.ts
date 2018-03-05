import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvStudentsComponent } from './Teacher View/Students/tv-students/tv-students.component';
import { TvPointsComponent } from './Teacher View/Points/tv-points/tv-points.component';
import { StudentViewComponent } from './Student View/student-view/student-view.component';
import { TeacherViewComponent } from './Teacher View/teacher-view/teacher-view.component';

const appRoutes: Routes = [
  {path: 'teacher',
    component: TeacherViewComponent,
    data: {title: 'Teacher View'}
  },
  {path: 'students',
    component: StudentViewComponent,
    data: {}
  },
  { path: '',
    redirectTo: '/teacher',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

