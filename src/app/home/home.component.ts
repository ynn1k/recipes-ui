import { Component } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { CommonModule } from '@angular/common';
import { Recipe } from '../interfaces';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes
    })
  }
}
