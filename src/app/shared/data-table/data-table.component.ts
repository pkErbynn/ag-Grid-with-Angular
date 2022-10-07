import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  // rowData: any[] = [];
  rowData$: Observable<any[]>;
  columnDefs: ColDef[];
  paginationPageSize: number;

  @Input('tableHeadings') headings: { field: string }[] | any[];
  @Input('dataToRender') data: any[] = [];
  @Input('pagination') paginationSize: number;
  @Output() rowClickedData = new EventEmitter<any>();

  constructor() {
  }

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100,
  };


  ngOnInit(): void {
    this.columnDefs = this.headings;
    this.paginationPageSize = this.paginationSize ?? 5;
  }

  onGridReady(params) {
    this.rowData$ = of(this.data);
  }

  onRowClicked(event: RowClickedEvent) {
    console.log('--> ROW DATA:');
    console.log(event.data);
    this.rowClickedData.emit(event.data)
  }

}
