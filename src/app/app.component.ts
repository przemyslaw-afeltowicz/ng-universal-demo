import { Component, OnInit, Inject, Optional } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TransferState } from '../modules/transfer-state/transfer-state';

@Component({
	selector: 'demo-app',
	template: `
	  <h1>Universal Demo</h1>
    <p>Current URL: {{currentURL}}</p>
	  <a routerLink="/">Home</a>
	  <a routerLink="/lazy">Lazy</a>
	  <router-outlet></router-outlet>
	`,
  styles: [
    `h1 {
      color: green;
    }`
  ]
})
export class AppComponent implements OnInit {
  currentURL: string;
  constructor(private cache: TransferState, @Optional() @Inject(REQUEST) private req: any) { }
  ngOnInit() {
    this.cache.set('req', {
      originalUrl: this.req.originalUrl
    });
    this.currentURL = this.req.originalUrl
  }
}
