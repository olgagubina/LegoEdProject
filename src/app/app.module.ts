import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentsViewService } from "./students-view.service";

import { AppComponent } from './app.component';
import { TeacherViewComponent } from './Teacher View/teacher-view/teacher-view.component';
import { StudentViewComponent } from './Student View/student-view/student-view.component';
import { TvStudentsComponent } from './Teacher View/Students/tv-students/tv-students.component';
import { TvPointsComponent } from './Teacher View/Points/tv-points/tv-points.component';
import { ShopItemsComponent } from './Student View/shop-items/shop-items.component';
import { StudentsComponent } from './Student View/students/students.component';
import { RewardItemsComponent } from './Student View/reward-items/reward-items.component';
import { PunishItemsComponent } from './Student View/punish-items/punish-items.component';
import { AllStudentsComponent } from './Teacher View/Students/all-students/all-students.component';
import { PresentStudentsComponent } from './Teacher View/Students/present-students/present-students.component';
import { StudentFormDialogComponent } from './Teacher View/Students/student-form-dialog/student-form-dialog.component';
import { PointsFormDialogComponent } from './Teacher View/Points/points-form-dialog/points-form-dialog.component';
import { MaterialImportsModule } from '../material-imports.module';
import { PrizesComponent } from './Teacher View/Points/prizes/prizes.component';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { RewardsComponent } from './Teacher View/Points/rewards/rewards.component';
import { PunishmentsComponent } from './Teacher View/Points/punishments/punishments.component';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';



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
  declarations: [
    AppComponent,
    TeacherViewComponent,
    StudentViewComponent,
    TvStudentsComponent,
    TvPointsComponent,
    ShopItemsComponent,
    StudentsComponent,
    RewardItemsComponent,
    PunishItemsComponent,
    AllStudentsComponent,
    PresentStudentsComponent,
    StudentFormDialogComponent,
    PointsFormDialogComponent,
    PrizesComponent,
    RewardsComponent,
    PunishmentsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MaterialImportsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging 
    ),
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule,
    BrowserAnimationsModule 
  ],
  entryComponents:[StudentFormDialogComponent, PointsFormDialogComponent],
  providers: [StudentsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
