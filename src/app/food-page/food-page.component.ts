import { CartService } from './../service/cart/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { food } from './../shared/modul/food';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../service/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  food!: food;
  constructor(private active: ActivatedRoute,
    private serviceFood: FoodService,
    private cartService: CartService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.active.params.subscribe((params) => {
      if (params['id'])
      this.food = this.serviceFood.getFoodById(params['id'])
    })
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
