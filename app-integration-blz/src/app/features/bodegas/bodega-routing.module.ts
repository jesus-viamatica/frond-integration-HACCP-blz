import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodegaComponent } from './pages/bodega/bodega.component';


const routes: Routes = [
  {
    path: 'bodega',
    children: [
      {
        path: '',
        component: BodegaComponent,
      }
    ]

  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class BodegaRoutingModule { }