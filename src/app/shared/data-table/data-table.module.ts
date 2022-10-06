import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule, AgGridModule
  ],
  exports: [DataTableComponent]
})
export class DataTableModule { }
