import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolvedExercisesComponent } from './solved-exercises.component';

describe('SolvedExercisesComponent', () => {
  let component: SolvedExercisesComponent;
  let fixture: ComponentFixture<SolvedExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolvedExercisesComponent]
    });
    fixture = TestBed.createComponent(SolvedExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
