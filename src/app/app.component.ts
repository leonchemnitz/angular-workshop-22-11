import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Food, FoodService } from './services/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  foodItems$: Observable<Food[]>;

  constructor(private foodService: FoodService) {
    this.foodItems$ = this.foodService.getFoods();
  }
}
