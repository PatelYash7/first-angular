import { Component } from '@angular/core';
import { DataService } from '../../service/data-service';

@Component({
  selector: 'app-sibling2',
  imports: [],
  templateUrl: './sibling2.component.html',
  styleUrl: './sibling2.component.css'
})
export class Sibling2Component {
  message!: string;

  constructor(private dataService: DataService) {}

  receiveMessage() {
    this.message = this.dataService.getMessage();
  }
}
