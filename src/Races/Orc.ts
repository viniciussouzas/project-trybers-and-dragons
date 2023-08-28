import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  static _countInstancesOfOrc = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._countInstancesOfOrc += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstancesOfOrc;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}