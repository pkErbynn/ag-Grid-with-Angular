import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell-custom',
  templateUrl: './cell-custom.component.html',
  styleUrls: ['./cell-custom.component.css']
})
export class CellCustomComponent implements OnInit {    // can implement ICellRendererComp
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
