import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  // {
  //   path: 'products',
  //   loadChildren: () => import('./products/product.routes').then(r => r.PRODUCT_ROUTES)
  // },
  // {
  //   path: 'about',
  //   loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
  // },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
