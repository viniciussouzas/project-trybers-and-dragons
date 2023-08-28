import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _countInstancesOfNecromancer = 0;

  constructor(name: string) {
    super(name);
    Necromancer._countInstancesOfNecromancer += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._countInstancesOfNecromancer;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}