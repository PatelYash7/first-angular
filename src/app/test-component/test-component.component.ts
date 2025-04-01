import { Component, Input } from '@angular/core';
import { ParentComponetComponent } from '../parent-componet/parent-componet.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';

@Component({
  selector: 'app-test-component',
  imports: [ParentComponetComponent,Sibling1Component,Sibling2Component],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css'
})
export class TestComponentComponent {
  @Input() message!:string;
  title="Hello Jai Hind"
  num =0;
  increaseFuntion(){
    this.num=this.num+1;
  }
  decreaseFuntion(){
    this.num=this.num-1;
  }
}
