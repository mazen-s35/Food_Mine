import { FoodService } from './../service/food/food.service';
import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/modul/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  @Input()
  justifyContent: string = 'center';
  tags?: Tag[]
  constructor(private serviceFood: FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.serviceFood.getAllTags();
  }

}
