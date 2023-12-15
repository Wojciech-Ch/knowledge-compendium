import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectOperationsComponent } from './object-operations.component';

describe('ObjectOperationsComponent', () => {
  let component: ObjectOperationsComponent;
  let fixture: ComponentFixture<ObjectOperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ObjectOperationsComponent]
    });
    fixture = TestBed.createComponent(ObjectOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
