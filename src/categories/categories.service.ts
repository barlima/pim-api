import { Injectable } from "@nestjs/common";
import { Category } from "./category.interface";
import { enCategoriesList } from './data/en.categories.list';

@Injectable()
export class CategoriesService {
  getCategories(): Category[] {
    return enCategoriesList as Category[];
  }
}