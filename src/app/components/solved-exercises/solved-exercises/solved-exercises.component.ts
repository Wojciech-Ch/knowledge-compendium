import { Component } from '@angular/core';


@Component({
  selector: 'app-solved-exercises',
  templateUrl: './solved-exercises.component.html',
  styleUrls: ['./solved-exercises.component.css']
})
export class SolvedExercisesComponent {
  solvedFormsExercises: Array<any> = [
    {
      name: 'Napisz prosty formularz reaktywny (łatwe)',
      path: 'exercise-1'
    },
    {
      name: 'Stwórz ToDo liste opartą na formularzu reaktywnym (średnie)',
      path: 'exercise-2'
    },
    {
      name: 'Stwórz formularz spełniający warunki (trudne)',
      path: 'exercise-3'
    }
  ]
}
