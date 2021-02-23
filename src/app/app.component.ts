import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to ag-Grid Demo with Angular';
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // reading row data from file
    this.http.get("assets/data.json").subscribe(data => {
      this.rowData = data
    });
  }

  // Column configurations
  columnDefs = [
    // sorting, groupings and other operations are done on the column headers
    { headerName: 'Make', field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      width: 150,
      resizable: true
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ]

}
