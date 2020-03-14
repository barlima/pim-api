import { shuffle, random } from 'lodash';
import { Injectable } from '@nestjs/common';
import { Round } from './round.interface';
import { Category } from '../categories/category.interface';
import { Language } from './language.enum';

import { enCategoriesList } from '../categories/data/en.categories.list';
import { plCategoriesList } from '../categories/data/pl.categories.list';

import { EnAlphabet } from './alphabets/en.alphabet.list';
import { PlAlphabet } from './alphabets/pl.alphabet.list';

@Injectable()
export class RoundsService {
  getRounds(numberOfRounds: number, language: Language): Round[] {
    const randomCategories: Category[] = shuffle(this.getCategories(language));

    return randomCategories
      .slice(0, numberOfRounds)
      .map(category => ({
        category,
        letter: this.getRandLetter(language)
      }));
  }

  // PRIVATE

  private getCategories(language: Language) {
    switch (language) {
      case Language.EN:
        return enCategoriesList;
      case Language.PL:
        return plCategoriesList;
      default:
        return enCategoriesList;
    }
  }

  private getRandLetter(language: Language) {
    switch (language) {
      case Language.EN:
        return EnAlphabet[random(EnAlphabet.length)];
      case Language.PL:
        return PlAlphabet[random(PlAlphabet.length)];
      default:
        return EnAlphabet[random(EnAlphabet.length)];
    }
  }
}