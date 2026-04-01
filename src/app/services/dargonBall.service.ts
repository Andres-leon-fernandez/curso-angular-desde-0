import { Character } from './../interfaces/character-interface';
import { effect, Injectable, signal } from '@angular/core';

function loadToLocalStorage() {
  const storedCharacters = localStorage.getItem('Characters');

  return storedCharacters ? JSON.parse(storedCharacters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballServices {
  characters = signal<Character[]>(loadToLocalStorage());

  saveTolocalStorage = effect(() => {
    localStorage.setItem('Characters', JSON.stringify(this.characters()));
  });

  addCharacter(newCharacter: Character) {
    this.characters.update((list) => [...list, newCharacter]);
  }
}
