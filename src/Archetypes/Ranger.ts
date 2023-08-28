import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  static _countInstancesOfRanger = 0;

  constructor(name: string) {
    super(name);
    Ranger._countInstancesOfRanger += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return this._countInstancesOfRanger;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}