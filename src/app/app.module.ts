import {BrowserModule} from "@angular/platform-browser";
import {Inject, NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from "@ngx-translate/core";
import {Observable} from "rxjs";
import {LangEnum} from "./shared/enums/lang.enum";
import {SharedModule} from "./shared/shared.module";
import {DOCUMENT} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {fromPromise} from "rxjs/internal-compatibility";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoadingBarHttpClientModule} from "@ngx-loading-bar/http-client";
import {LoadingBarRouterModule} from "@ngx-loading-bar/router";
import {UserService} from "./shared/services/user.service";

class CustomTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<I18nDefinition> {
    return fromPromise(import(`./i18n/${lang}.ts`).then(m => m.default));
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: CustomTranslateLoader
      }
    }),
    SharedModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) {
    const defaultLang = window?.navigator?.language || LangEnum.ZH_CN;
    this.activatedRoute.queryParams.subscribe(({lang}) => {
      lang = lang || defaultLang;
      this.document.documentElement.setAttribute("lang", lang);
      this.translateService.use(lang);
    });
  }
}
