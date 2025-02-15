import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome-page/welcome.component';


const routes: Routes = [
  {
    path: 'welcome',
    children: [
      {
        path: '',
        component: WelcomeComponent,
      }
    ]

  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainRoutingModule { }