import { IEntity } from '../../shared/interfaces';

export class SensorValue implements IEntity {
  constructor(
    public dateTime: string,
    public value: number,
    public $key?: string
  ) { }
}
