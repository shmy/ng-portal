import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
class CustomTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, private prefix?: string, private suffix?: string) {
  }
  // tslint:disable-next-line:no-any
  getTranslation(lang: string): Observable<any> {
    // fail back to default lang
    return this.http.get(`${this.prefix}${lang}${this.suffix}`)
      .pipe(
        retry(2),
        catchError(() => this.getTranslation(defaultLang))
      );
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
