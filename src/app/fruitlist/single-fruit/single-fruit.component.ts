import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss'
})
export class SingleFruitComponent {
  // @Input()fruitnumber = 0;

  // Alternativ:
  @Input()fruit = {
    name: "Apfel",
    img:"apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews:[{name: "Waldemar W.", text: "gut für Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
  };

inputData = "";

@Output()fruitname = new EventEmitter<string>();

//neue Funktion, die unseren Output fruitname benutzt:
emitName(){
  this.fruitname.emit(this.fruit.name);
}


@Output()commentOutput = new EventEmitter<string>();
sendInputData(){
  // console.log(this.inputData);

  this.inputData = "Mit ngModel kann Input kann auch anders herum manipuliert werden!";
}

}
