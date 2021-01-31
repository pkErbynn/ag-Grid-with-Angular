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
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // reading row data from file
    this.http.get("assets/data.json").subscribe(data => {
      this.rowData = data
    });
  }

 // Column configurations
  columnDefs = [
    { headerName: 'Make', field: 'make',
      rowGroup: true  // enable grouping on this column
    },
    { headerName: 'Price', field: 'price', sortable: true, filter: true},  // nested grouping when enabled
  ]

  // grouping configurations
  autoGroupColumnDef = {
    headerName: 'MakeGrouping',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
  };

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => {
          return node.data;
        });
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

        alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

}
