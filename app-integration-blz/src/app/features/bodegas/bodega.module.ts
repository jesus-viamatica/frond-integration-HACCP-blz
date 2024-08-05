import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, Form } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



import { FormsModule } from '@angular/forms';




import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { BodegaRoutingModule } from './bodega-routing.module';
import { BodegaComponent } from './pages/bodega/bodega.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
     BodegaComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    BodegaRoutingModule,
    SharedModule,
    FormsModule,
    SharedModule
]


})
export class BodegaModule { }
