import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CellCustomComponent } from './components/cell-custom/cell-custom.component';

// demo of cellRendererFramework for column customization

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
      cellRendererFramework: CellCustomComponent  // as wrapper for this column
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ]

}
