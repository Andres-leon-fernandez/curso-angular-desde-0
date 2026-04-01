import { ChangeDetectionStrategy, Component, signal, output } from '@angular/core';
import { Character } from '../../../interfaces/character-interface';

@Component({
  selector: 'app-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power(),
    };

    console.log({ newCharacter });

    //this.characters.update((list) => [...list, newCharacter]);
    this.newCharacter.emit(newCharacter);
  }

  resetfile() {
    this.name.set('');
    this.power.set(0);
  }
}
