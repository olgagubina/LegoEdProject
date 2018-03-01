import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeacherViewComponent } from './Teacher View/teacher-view/teacher-view.component';
import { StudentViewComponent } from './Student View/student-view/student-view.component';
import { TvStudentsComponent } from './Teacher View/Students/tv-students/tv-students.component';
import { TvPointsComponent } from './Teacher View/Points/tv-points/tv-points.component';
import { ShopItemsComponent } from './Student View/shop-items/shop-items.component';
import { StudentsComponent } from './Student View/students/students.component';
import { PointItemsComponent } from './Student View/point-items/point-items.component';
import { RewardItemsComponent } from './Student View/reward-items/reward-items.component';
import { PunishItemsComponent } from './Student View/punish-items/punish-items.component';
import { AllStudentsComponent } from './Teacher View/Students/all-students/all-students.component';
import { PresentStudentsComponent } from './Teacher View/Students/present-students/present-students.component';
import { StudentFormDialogComponent } from './Teacher View/Students/student-form-dialog/student-form-dialog.component';
import { PointsFormDialogComponent } from './Teacher View/Points/points-form-dialog/points-form-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherViewComponent,
    StudentViewComponent,
    TvStudentsComponent,
    TvPointsComponent,
    ShopItemsComponent,
    StudentsComponent,
    PointItemsComponent,
    RewardItemsComponent,
    PunishItemsComponent,
    AllStudentsComponent,
    PresentStudentsComponent,
    StudentFormDialogComponent,
    PointsFormDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
