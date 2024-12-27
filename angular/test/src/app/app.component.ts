import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CompComponent } from "./comp/comp.component";
import { DRIVERS } from '../db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
klikni() {
window.alert("got you again");
}
onAppView() {
console.log("Congratulations?");
}
  title = 'test';
  PB = DRIVERS[0];
  JM = DRIVERS[1];
  MM = DRIVERS[2];
  vozaci= DRIVERS;
}