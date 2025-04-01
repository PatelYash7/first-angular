import { Component } from '@angular/core';
import { DataService } from '../../service/data-service';

@Component({
  selector: 'app-sibling1',
  imports: [],
  templateUrl: './sibling1.component.html',
  styleUrl: './sibling1.component.css'
})
export class Sibling1Component {
  constructor(private dataService: DataService) {}
  sendMessage() {
    this.dataService.setMessage('Hello from sibling1 component');
  }
}
