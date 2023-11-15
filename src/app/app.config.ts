import {ApplicationConfig, isDevMode} from '@angular/core'
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideTransloco} from '@ngneat/transloco'
import {provideHttpClient} from '@angular/common/http'
import {TranslocoHttpLoader} from './transloco-loader'
import {provideAnimations} from '@angular/platform-browser/animations'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'fr',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })
  ]
};
