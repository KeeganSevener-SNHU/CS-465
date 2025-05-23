import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';
import { authInterceptProvider } from './jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    authInterceptProvider
  ]
};
