import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule]
})
export class TableComponent  {
  myDataArray = [
    { id: "08:30:00", name: '07:30:00', id2: "P1-A02-07" },
    { id: "07:30:00", name: '05:30:00', id2: "P2-A02-07" },
    { id: "07:30:00", name: '07:10:00', id2: "P1-A02-07" },
     { id: "08:30:00", name: '07:30:00', id2: "P3-A02-07" },
    { id: "07:30:00", name: '04:30:00', id2: "P1-A02-07" },
    { id: "08:30:00", name: '07:30:00', id2: "P3-A02-07" },
    { id: "07:30:00", name: '04:30:00', id2: "P1-A02-07" },
  
  ];
  displayedColumns: string[] = ['id', 'name', 'id2'];

}
