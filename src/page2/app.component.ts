import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './table/table.component';
import { CirclerProgressComponent } from './circler-progress/circler-progress.component';
import {MatCardModule} from '@angular/material/card';
import { Table2Component } from './table2/table2.component';
import { Table3Component } from './table3/table3.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,TableComponent,CirclerProgressComponent,MatCardModule,Table2Component,Table3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FC11';
}
