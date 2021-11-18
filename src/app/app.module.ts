import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatagoryTableComponent } from './catagory-table/catagory-table.component';
import { PracticeComponent } from './practice/practice.component';
import { CatagoryTableService } from './catagory-table.service';

@NgModule({
  declarations: [
    AppComponent,
    CatagoryTableComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    FormsModule
    
  ],
  providers: [
    CatagoryTableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
