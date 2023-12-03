import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,MatProgressBarModule],

  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 list = [
    { title: 'حجاج الداخل', value: 93 },
    { title: 'نقاط التجمع', value: 100 },
    { title: 'المسجد الحرام', value: 80 },
    { title: 'محطة الجمرات', value: 99 },
    { title: 'مخيمات منى', value: 98 },
    { title: 'مشعر عرفات', value: 74 },
    { title: 'مشعر مزدلفة', value: 0 }
  ];
}