import { Component, ViewChild } from '@angular/core';
import { IRide } from './models/ride';
import { Observable } from 'rxjs';
import { RideService } from './services/ride.service';
import { CellButtonRendererComponent } from './components/cell-button-renderer/cell-button-renderer.component';

// demo of cell button renderer for column customization

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to ag-Grid Demo with Angular';
  rowData: Observable<IRide[]>;
  frameworkComponents: {};

  constructor(private rideService: RideService) {
    // referenced in view to render button
    this.frameworkComponents = {
      buttonCellRenderer: CellButtonRendererComponent
    }
  }

  ngOnInit(): void {
    this.rowData = this.rideService.getRides();
  }

  // Column configurations
  columnDefs = [
    { headerName: 'Make',
      field: 'make',
      sortable: true,
      filter: true,
      resizable: true,
    },
    { headerName: 'Model',
      field: 'model',
      sortable: true,
      filter: true,
      resizable: true,
    },
    { headerName: 'Price',
      field: 'price',
      sortable: true,
      filter: true,
      resizable: true,
    },
    { headerName: 'Action',
      field: '',
      resizable: true,
      cellRenderer: 'buttonCellRenderer', // targets the button renderer reference
      cellRendererParams: {
        onClick: this.onView.bind(this),  // passes AppComponent object as param in order to access the rowData
        label: 'View'
      }
    },
  ]

  onView(event: this) {
    const selectedRideData = JSON.stringify(event.rowData) // convert Ride object to json
    alert(selectedRideData);
  }

}
