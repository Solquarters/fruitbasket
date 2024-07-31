import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleFruitComponent } from './single-fruit/single-fruit.component';
import { FruitlistDataService } from '../fruitlist-data.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingleFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitListData = inject(FruitlistDataService);

 
  namelog(name: string){
    console.log(name);
  }

  addComment(comment: string, index: number){
    this.fruitListData.addCommentToFruit(comment, index)
  }

  
}
