import { Component, DirectiveDecorator, Input } from '@angular/core';
import{driver} from '../../driver';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css']
})

export class CompComponent {

  klasi() {
    return {
      'begin': this.vozac?.category === 'ASD', 
      'adv': this.vozac?.category === 'EXPERT', 
      'undr': true 
    };
  }

  klasi2() {
    if (this.vozac?.category == 'ASD') {
      return 'begin';
    } else {
      return 'adv'; 
    }
  }

  stil(){
    return { 'text-decoration': 'underline' }; 
  }
  
  onDrvView() {
    let link: string | undefined;
    
    
    if (this.vozac?.iconUrl) {
      link = this.vozac?.iconUrl;
    } else {
      link = "https://www.google.com"; 
    }
    
    window.open(link, "_blank"); 
  }
  
  

  @Input()
  vozac: driver|undefined;

  @Input()
  indeks: number|undefined;
}