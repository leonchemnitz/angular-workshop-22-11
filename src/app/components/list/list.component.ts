import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  foodItems$: Observable<Food[]>;

  constructor(private foodService: FoodService) {
    this.foodItems$ = this.foodService.getFoods();
  }
}
