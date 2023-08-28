import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _countInstancesOfHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Halfling._countInstancesOfHalfling += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstancesOfHalfling;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}