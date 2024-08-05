import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';
import { LayoutService } from '../../services/app.layout.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  isLoading = true;


  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;

  constructor(public layoutService: LayoutService, private navCtrl: NavController) { }
  onLogout() {
   
  }

  set theme(val: string) {
    this.layoutService.config.update((config) => ({
        ...config,
        theme: val,
    }));
}
get theme(): string {
    return this.layoutService.config().theme;
}

  set colorScheme(val: string) {
    this.layoutService.config.update((config) => ({
        ...config,
        colorScheme: val,
    }));
}
get colorScheme(): string {
    return this.layoutService.config().colorScheme;
}


isLightTheme: boolean = false;
changeTheme() {
  this.themeIcon = this.isLightTheme ? 'pi pi-fw pi-sun' : 'pi pi-fw pi-moon';

  if (this.isLightTheme) {
    this.theme = 'lara-dark-blue'; 
    this.colorScheme = 'dark';
    this.isLightTheme = false;
  } else {
    this.theme = 'lara-light-blue';
    this.colorScheme = 'light';
    this.isLightTheme = true;
  }
}
themeIcon?: string;

navegar(ruta: string) {
  this.navCtrl.navigateRoot( ruta, { animated: true } );
}

}

