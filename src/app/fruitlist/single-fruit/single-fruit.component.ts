import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss'
})
export class SingleFruitComponent {
  // @Input()fruitnumber = 0;

  // Alternativ:
  @Input("testName")fruitnumber = 0;
}
