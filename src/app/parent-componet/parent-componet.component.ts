import { Component } from '@angular/core';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-parent-componet',
  imports: [ChildComponentComponent],
  templateUrl: './parent-componet.component.html',
  styleUrl: './parent-componet.component.css',
})
export class ParentComponetComponent {
  message = 'Hello from parent commponent';
}
