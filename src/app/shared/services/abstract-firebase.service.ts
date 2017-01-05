import { Injectable } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { IEntity } from '../../shared/interfaces';
import { AuthService } from '../../shared/services';

@Injectable()
export abstract class AbstractFirebaseService<T extends IEntity> {

  protected abstract get entityPath(): string;

  protected list: FirebaseListObservable<IEntity[]>;

  constructor(
    protected angularFire: AngularFire,
    protected authService: AuthService
  ) {
    this.list = angularFire.database.list(this.entityPath)
  }

  get(entityId: string) {
    return this.angularFire.database.object(`${this.entityPath}/${entityId}`);
  }

  getList(options?: Object) {
    return this.angularFire.database.list(`${this.entityPath}`, options);
  }

  create(entity: T): firebase.database.ThenableReference {
    return this.list.push(entity);
  }

  update(entity: T, changes: Object): firebase.Promise<any> {
    return this.list.update(entity.$key, changes);
  }

  delete(entity: T): firebase.Promise<any> {
    return this.list.remove(entity.$key);
  }
}
