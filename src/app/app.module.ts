import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { CoreModule } from './core/core.module';
import { EditGpPhaseComponent } from './views/edit-gp-phase/edit-gp-phase.component';

@NgModule({
  declarations: [
    AppComponent,
    EditGpPhaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
