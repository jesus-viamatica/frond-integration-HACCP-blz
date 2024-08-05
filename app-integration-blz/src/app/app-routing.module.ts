import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './shared/pages/layout-page/layout-page.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/main/main.module').then((m) => m.MainModule),
      },
      {
        path: '',
        loadChildren: () =>
          import('./features/bodegas/bodega.module').then((m) => m.BodegaModule),
      },
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
