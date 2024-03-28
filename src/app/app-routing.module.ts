import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MyCustomPageWithId } from './my-custom-page/custom-page-with-id/custom-page-with-id';
import { AnotherPage } from './another/another.page';
import { AuthenticationService } from './authentication.service';
import { NthPagePage } from './nth-page/nth-page.page';
import { AnotherPageWithFetch } from './another-page/another-page-with-fetch/another-page-with-fetch';
const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'my-custom-page',
    loadChildren: () => import('./my-custom-page/my-custom.module').then( m => m.MyCustomPageModule)
  },
  {
    path: 'my-custom-page/:id', 
    component: MyCustomPageWithId
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'another', 
    component: AnotherPage,
    canActivate: [AuthenticationService]
  },
  
{path: 'nth-page', 
component: NthPagePage
},
  {
    path: 'another-page',
    loadChildren: () => import('./another-page/another-page.module').then( m => m.AnotherPagePageModule)
  },
  {
    path: 'another-page/:test',
    component: AnotherPageWithFetch
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
