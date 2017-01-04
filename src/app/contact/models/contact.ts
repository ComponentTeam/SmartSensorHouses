import { IEntity } from '../../shared/interfaces';

export class Contact implements IEntity {
  constructor(
    public firstName: string,
    public lastName: string,
    public contactEmail: string,
    public question: string
  ) { }
}
