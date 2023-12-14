import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor, Interceptor } from './security/auth-interceptor.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), importProvidersFrom(HttpClientModule),
    AuthInterceptor,
    Interceptor
  ]
};
