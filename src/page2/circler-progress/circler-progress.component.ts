import { Component } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-circler-progress',
  standalone: true,
  imports: [MatProgressSpinnerModule,CommonModule],
  templateUrl: './circler-progress.component.html',
  styleUrl: './circler-progress.component.css'
})
export class CirclerProgressComponent {
  list = [
    { title: '81 فوج', value: 100 , color:"primary"},
    { title: '81 فوج', value: 40  , color:"warn"},
    { title: '81 فوج', value: 100,color:"primary" },
    { title: '50 فوج', value: 70,color:"accent" },
    { title: '81 فوج', value: 100, color:"primary" },
    
  ];
}
