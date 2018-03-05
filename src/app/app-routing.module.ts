import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvStudentsComponent } from './Teacher View/Students/tv-students/tv-students.component';
import { TvPointsComponent } from './Teacher View/Points/tv-points/tv-points.component';
import { StudentViewComponent } from './Student View/student-view/student-view.component';

const appRoutes: Routes = [
  {path: 'teacher/students',
    component: TvStudentsComponent,
    data: {title: "Students"}
  },
  {path: 'teacher/points',
    component: TvPointsComponent,
    data: {title: "Achievments"}
  },
  {path: 'students',
    component: StudentViewComponent,
    data: {}
  },
  { path: '',
    redirectTo: '/teacher/students',
    pathMatch: 'prefix'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }

