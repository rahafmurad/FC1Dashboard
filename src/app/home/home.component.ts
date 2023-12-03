import { Component ,OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CircleComponentComponent } from '../circle-component/circle-component.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RoundedArrowComponent } from '../rounded-arrow/rounded-arrow.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HomeComponent,MatProgressBarModule,CircleComponentComponent,SidebarComponent,RoundedArrowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
}
