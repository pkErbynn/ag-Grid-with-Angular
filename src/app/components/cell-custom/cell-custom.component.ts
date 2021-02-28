import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

// NB: this component was NOT referenced

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit {    // can implement ICellRendererAngularComp
  data: any;
  params: any;

  constructor() { }

  // button data will have same value as cell value from rowData
  agInit(params){   // cellRendererFramework implements agInit();
    this.params = params.value;
    this.data = params.value;
  }

  ngOnInit(): void {
  }

  onTrigger(){
    const paramValue = this.params;
    console.log(paramValue);
    alert(paramValue)
  }

}
