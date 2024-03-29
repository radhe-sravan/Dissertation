import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()), provideClientHydration(),provideHttpClient()]
};
