import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  valoriInput: string[] = [];
  hero: {
    name: string
    alterEgo: string
    power: string
    enemy: string[]
    Planet: string
    weakness: string
  } = {
      name: '',
      alterEgo: '',
      power: '',
      enemy: [],
      Planet: '',
      weakness: ''
    }
  aggiungiValoriInput() {
    // Aggiungi i valori degli input all'array valoriInput
    this.valoriInput.push(this.hero.name);
    this.valoriInput.push(this.hero.alterEgo);
    this.valoriInput.push(this.hero.power);
    this.valoriInput.push(this.hero.enemy[3]);
    this.valoriInput.push(this.hero.Planet);
    this.valoriInput.push(this.hero.power);
    // Cancella i valori degli input dopo averli aggiunti alla lista
    this.hero.name = '';
    this.hero.alterEgo = '';
    this.hero.power = '';
    this.hero.enemy[0] = '';
    this.hero.Planet = '';
    this.hero.power = '';
  }
  ngOnInit() {


  }
}


