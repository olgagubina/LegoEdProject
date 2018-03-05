import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule, MatTableDataSource } from '@angular/material';
import { MatInputModule, MatFormFieldModule} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentsViewService } from './students-view.service';

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
import { RewardsComponent } from './Teacher View/Points/rewards/rewards.component';
import { PunishmentsComponent } from './Teacher View/Points/punishments/punishments.component';
import { DropdownPrizesComponent } from './dropdown-prizes/dropdown-prizes.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



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
    PunishmentsComponent,
    DropdownPrizesComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MaterialImportsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  entryComponents: [PointsFormDialogComponent, StudentFormDialogComponent],
  providers: [StudentsViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
