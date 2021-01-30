import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.css']
})
export class ResultGridComponent implements OnInit {
  rowData: any;
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe(data => {
      this.rowData = data
    });
  }

  columnDefs = [
    // sorting, groupings and other operations are done on the column headers
    { headerName: 'Make', field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      width: 50
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ]

}
