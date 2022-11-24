import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

export type Food = {
  id: number;
  attributes: {
    name: string;
    healthiness: number;
  };
};

export type Foods = {
  data: Food[];
};

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}

  getFoods() {
    return this.http.get<Foods>('api/foods').pipe(map((foods) => foods.data));
  }
}
