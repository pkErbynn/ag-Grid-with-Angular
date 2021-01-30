import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ResultGridComponent } from './components/result-grid/result-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultGridComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ResultGridComponent]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
