import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTypesComponent } from './basic-types.component';

describe('BasicTypesComponent', () => {
  let component: BasicTypesComponent;
  let fixture: ComponentFixture<BasicTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicTypesComponent]
    });
    fixture = TestBed.createComponent(BasicTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
