import { Component , Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circle-component',
  standalone: true,
  imports: [CommonModule,MatMenuModule],
  templateUrl: './circle-component.component.html',
  styleUrl: './circle-component.component.css'
  
})
export class CircleComponentComponent {
  constructor(private router: Router) { }

  navigateToNewPage() {
    this.router.navigate(['src/page2']);
  }
  @Input() item = '';

  isClicked: boolean = false;
  onClick() {
    this.isClicked = !this.isClicked;
  }
}


