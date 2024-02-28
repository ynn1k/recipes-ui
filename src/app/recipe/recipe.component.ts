import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../interfaces';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})

export class RecipeComponent {
  recipe: Recipe | undefined

  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute,
) {}

  ngOnInit() {
    const recipeId = Number(this.route.snapshot.params["id"])
    this.recipeService.getRecipeById(recipeId).subscribe(recipe => {
      this.recipe = recipe
    })
  }

}
