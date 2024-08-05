import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, Form } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



import { FormsModule } from '@angular/forms';


import { WelcomeComponent } from './welcome-page/welcome.component';
import { SharedModule } from 'primeng/api';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    IonicModule,
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    MainRoutingModule,
    SharedModule,
    FormsModule
  ]


})
export class MainModule { }
