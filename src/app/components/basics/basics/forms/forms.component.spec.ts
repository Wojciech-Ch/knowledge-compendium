import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsComponent } from './forms.component';

describe('FromsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FromsComponent],
    });
    fixture = TestBed.createComponent(FromsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
