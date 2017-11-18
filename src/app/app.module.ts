import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './config/app-routing.module'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }]
})
export class AppModule {
}
