import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-cell-button-renderer',
  templateUrl: './cell-button-renderer.component.html',
  styleUrls: ['./cell-button-renderer.component.css']
})
export class CellButtonRendererComponent implements ICellRendererAngularComp {
  params: any;
  label: any;   // value passed by caller ie. app.component, line #56

  constructor() { }

  agInit(params){
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean{
    return true;
  }

  onClick($event){
    if(this.params.onClick instanceof Function){
      const params = {
        event: $event,
        rowData: this.params.node.data,
        rowIndex: this.params.node.rowIndex,
      };

      this.params.onClick(params);
    }
  }
}
