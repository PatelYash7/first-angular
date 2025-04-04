import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponetComponent } from './parent-componet.component';

describe('ParentComponetComponent', () => {
  let component: ParentComponetComponent;
  let fixture: ComponentFixture<ParentComponetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentComponetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
