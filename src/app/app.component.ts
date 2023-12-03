import { Component } from '@angular/core';
import { ProgressBarModule } from '@syncfusion/ej2-angular-progressbar';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule } from '@syncfusion/ej2-angular-buttons';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProgressBarModule, ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule, ChipListModule, FabModule, SpeedDialModule, CommonModule, RouterOutlet,MatSlideToggleModule,HomeComponent,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dashboard1';
}

