import { Injectable } from '@angular/core';
import { StringBoolean } from './jasonstypes'

@Injectable()
export abstract class AppService {
  constructor(private s: StringBoolean) {

  }
}

export class ActualAppService extends AppService {

}
