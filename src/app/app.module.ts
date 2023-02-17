import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmDdStudentComponent } from './sm-dd-student/sm-dd-student.component';
import { SmStudentListComponent } from './sm-student-list/sm-student-list.component';
import { SmBalanceFilterPipe } from './sm-balance-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmDdStudentComponent,
    SmStudentListComponent,
    SmBalanceFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
