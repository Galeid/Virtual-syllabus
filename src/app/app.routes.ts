import { Routes } from '@angular/router';

import { MainLayoutComponent } from './layouts/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { PreviewComponent } from './views/preview/preview.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'preview',
        component: PreviewComponent,
      },
    ],
  },
];
