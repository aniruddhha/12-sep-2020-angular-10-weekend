import { DemoService } from './demo.service';
import { RemoteService } from './remote.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AllService {

  constructor(
    private remote: RemoteService,
    private demo: DemoService
  ) { }
}
