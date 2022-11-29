import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export type Food = {
  id: number;
  name: string;
  healthiness: number;
};

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFoods() {
    return this.http.get<Food[]>('api/foods');
  }

  get(id: string) {
    return this.http.get<Food>(`api/foods/${id}`);
  }

  save(food: Food) {
    console.log('saving!');
    return this.http.put<Food>(`api/foods/${food.id}`, food);
  }
}
