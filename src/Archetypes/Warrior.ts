import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _countInstancesOfWarrior = 0;

  constructor(name: string) {
    super(name);
    Warrior._countInstancesOfWarrior += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._countInstancesOfWarrior;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}