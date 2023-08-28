import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  static _countInstancesOfElf = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._countInstancesOfElf += 1;
  }

  static createdRacesInstances(): number {
    return this._countInstancesOfElf;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}