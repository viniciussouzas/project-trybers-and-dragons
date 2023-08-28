import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  static _countInstancesOfMage = 0;

  constructor(name: string) {
    super(name);
    Mage._countInstancesOfMage += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return this._countInstancesOfMage;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}