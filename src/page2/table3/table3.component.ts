import { Component } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table3',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table3.component.html',
  styleUrl: './table3.component.css'
})
export class Table3Component {
  myDataArray = [
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    { id: "", name: '', id2: "" },
    
  
  ];
  displayedColumns: string[] = ['id', 'name', 'id2'];
}
