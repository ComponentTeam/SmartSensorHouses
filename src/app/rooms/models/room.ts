import { IEntity } from '../../shared/interfaces';

export class Room implements IEntity {
  constructor(
    public name: string,
    public description: string,
    public $key?: string
  ) { }
}
