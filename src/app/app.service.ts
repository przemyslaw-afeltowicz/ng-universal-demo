import { Injectable } from '@angular/core';
import { StringBoolean } from './jasonstypes'

export abstract class AppService {
  constructor(private s: StringBoolean = 'true') {

  }
}

export class ActualAppService extends AppService {

}
