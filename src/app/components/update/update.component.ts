import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { Food, FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent {
  currentFood: Food | undefined;

  constructor(
    route: ActivatedRoute,
    private foodService: FoodService,
    private router: Router
  ) {
    route.paramMap
      .pipe(
        map((params) => params.get('id')),
        switchMap((id) => {
          if (id === null) return of();
          return foodService.get(id);
        })
      )
      .subscribe((food) => (this.currentFood = food));
  }

  saveClicked() {
    if (this.currentFood !== undefined)
      this.foodService.save(this.currentFood).subscribe((result) => {
        this.router.navigateByUrl('');
        alert('Gespeichert!');
      });
  }
}
