import { Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Recipes" },
  { path: 'recipes/:id', component: RecipeComponent, title: "Recipe Page" },
];
