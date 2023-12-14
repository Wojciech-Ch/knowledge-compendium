import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringOperationsComponent } from './string-operations.component';

describe('StringOperationsComponent', () => {
  let component: StringOperationsComponent;
  let fixture: ComponentFixture<StringOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StringOperationsComponent]
    });
    fixture = TestBed.createComponent(StringOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
