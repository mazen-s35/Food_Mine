import { FoodService } from './../service/food/food.service';
import { Component, OnInit } from '@angular/core';
import { food } from '../shared/modul/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  foods:food[] = [];
  constructor(private serviceFood: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.serviceFood.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if (params['tag']) {
        this.foods = this.serviceFood.getAllFoodsByTag(params['tag'])
      }
      else {
        this.getAll();
      }
    })
  }

  getAll() {
    this.foods = this.serviceFood.getAll();
  }
}
