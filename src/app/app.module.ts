import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsComponent } from './cards/cards.component';
import { ShowCardsComponent } from './cards/show-cards/show-cards.component';
import { AddEditCardComponent } from './cards/add-edit-card/add-edit-card.component';
import { ShowCardOwnerComponent } from './cards/show-card-owner/show-card-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ShowDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditDepComponent,
    AddEditEmpComponent,
    CardsComponent,
    ShowCardsComponent,
    AddEditCardComponent,
    ShowCardOwnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }