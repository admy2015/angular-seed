import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

interface RouteData {
    preload: boolean;
  }

interface CustomRoute extends Route {
    data?: RouteData;
  }

export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(route: CustomRoute, preload: Function): Observable<any> {
      if (route.data && route.data.preload) {
        return preload();
      } else {
        return of(null);
      }
    }
  }