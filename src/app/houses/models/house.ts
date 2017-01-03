import { IEntity } from '../../shared/interfaces';

export class House implements IEntity {
  constructor(
    public name: string,
    public description: string,
    public location: string,
    public controlNumber?: number,
    public verificationCode?: string
  ) { }
}
