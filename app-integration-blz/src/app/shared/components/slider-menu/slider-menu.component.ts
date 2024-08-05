import { Component } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { LayoutService } from '../../services/app.layout.service';
import { MenuService } from '../../services/menu.service';


@Component({
  selector: 'app-slider-menu',
  templateUrl: 'slider-menu.component.html',
})
export class SliderMenuComponent {
  model: any[] = [];


  userLoginOn: boolean = false;
  constructor(
    public layoutService: LayoutService,
    private menuService: MenuService,
    private navCtrl: NavController,
  ) {
  }

ngOnInit() {

}
}
