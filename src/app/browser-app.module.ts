import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { TransferState } from '../modules/transfer-state/transfer-state';

export function getRequest(transferState) {
  return transferState.get('req');
}

@NgModule({
	bootstrap: [ AppComponent ],
	imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    BrowserTransferStateModule,
    AppModule
  ],
  providers: [
    {
      provide: REQUEST,
      useFactory: getRequest,
      deps: [
        TransferState
      ]
    }
  ]
})
export class BrowserAppModule {}
