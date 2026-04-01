import { DragonballServices } from './../../services/dargonBall.service';
import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonBall/character-list/character-list';
import { CharacterAdd } from '../../components/dragonBall/character-add/character-add';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css',
})
export class DragonballSuperPage {
  public dragonBallService = inject(DragonballServices);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 8000 },
  // ]);

  // addCharacter(newCharacter: Character) {
  //   this.characters.update((list) => [...list, newCharacter]);
  // }
}
