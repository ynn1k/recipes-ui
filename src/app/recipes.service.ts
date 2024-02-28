import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './interfaces';

@Injectable({
  providedIn: 'root',
})

export class RecipesService {
  host = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getRecipes() {
    return this.http.get<Recipe[]>(`${this.host}/recipes`)
  }

  getRecipeById(id: number) {
    return this.http.get<Recipe>(`${this.host}/recipes/${id}`)
  }

  // addRecipe(title: string, descr: string, ingredients: string, instructions: string) {
  //   return this.http.post(`${this.host}/recipes`, {
  //     title: title,
  //     description: descr,
  //     ingredients: ingredients,
  //     instructions: instructions,
  //   });
  // }
  //
  // updateRecipe() {}
  //
  // deleteRecipe(id: number) {
  //   return this.http.delete(`${this.host}/recipes/${id}`);
  // }
}
