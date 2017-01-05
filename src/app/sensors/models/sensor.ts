import { IEntity } from '../../shared/interfaces';

export class Sensor implements IEntity {
  constructor(
    public name: string,
    public description: string,
    public isRegistered: boolean,
    public controlNumber: number,
    public units: string,
    public values: [any],
    public $key?: string
  ) { }
}
