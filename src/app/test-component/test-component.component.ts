import { Component, Input, NgModule, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { ParentComponetComponent } from '../parent-componet/parent-componet.component';
import { Sibling1Component } from '../sibling1/sibling1.component';
import { Sibling2Component } from '../sibling2/sibling2.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-component',
  imports: [
    FormsModule,
    CommonModule
    // BrowserModule
    // ParentComponetComponent,
    // Sibling1Component,
    // Sibling2Component
  ],
  templateUrl: './test-component.component.html',
  styleUrl: './test-component.component.css',
})
export class TestComponentComponent implements OnChanges {
  @Input() message!: string;
  title = 'Hello';
  isActive = false;
  name: string = '';

  num = 0;
  onNameChange(a:Event) {
    console.log((a.target as HTMLInputElement).value)
    // console.log('Name changed to:', value);
    this.name = (a.target as HTMLInputElement).value
  }
  toggleActive() {
    this.isActive = !this.isActive;
  }
  increaseFuntion() {
    this.num = this.num + 1;
    this.toggleActive();
  }
  decreaseFuntion() {
    this.num = this.num - 1;
  }
  
  // Derivaties
  showElement = true;
  onClick = () => {
    console.log("Button is clicked")
    this.isActive = !this.isActive;
  };
  items = [{name:'Item 1'}, {name:'Item 2'}, {name:'  '}];


  @Input() message1!: string;
    prevMessage!: string;
    ngOnChanges(changes: SimpleChanges) {
      // @ts-ignore
      if (changes.message1) {
        console.log(
          // @ts-ignore
          `message changed from ${changes.message1.previousValue} to ${changes.message1.currentValue}`
        );
      }
    }
    onSubmit() {
      this.prevMessage = this.message;
    }
}


