import { Routes } from '@angular/router';
import { CountryListComponent } from './country-list/country-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [{
    matcher: (url) => {
      if (url.length === 0) {
        return {consumed: url, posParams: {}};
      }
  
      return null;
    },
    component: HomeComponent
  },{
    matcher: (url) => {
      if (url.length === 1 && url[0].path == "dynamic") {
        return {consumed: url, posParams: {}};
      }
  
      return null;
    },
    component: CountryListComponent
  }];
