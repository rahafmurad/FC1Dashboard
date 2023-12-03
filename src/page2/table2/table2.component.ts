import { Component } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table2',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './table2.component.html',
  styleUrl: './table2.component.css'
})
export class Table2Component {
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
