import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { CellCustomComponent } from './components/cell-custom/cell-custom.component';
import { CellButtonRendererComponent } from './components/cell-button-renderer/cell-button-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    CellCustomComponent,
    CellButtonRendererComponent,
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    HttpClientModule
  ],
  providers: [],
  entryComponents: [CellCustomComponent],   // cell custom renderer config
  bootstrap: [AppComponent]
})
export class AppModule { }
