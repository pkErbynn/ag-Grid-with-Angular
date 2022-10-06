import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to ag-Grid Demo with Angular';
  tableDataToRender: any = [];

  tableHeadingDefinitions: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];

  constructor(private http: HttpClient) { }


  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe(data => {
      this.tableDataToRender = data;
    });
  }


  onRowClickedData(event){
    alert(JSON.stringify(event))

  }


}
