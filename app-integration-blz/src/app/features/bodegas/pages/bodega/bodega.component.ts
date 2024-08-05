import { Component, OnInit } from '@angular/core';
import { BodegaService } from 'src/app/core/bodegas/bodega.service';
import { IBodega, IUbicacionBodega } from '../../interfaces/bodega';
import { UiServiceService } from 'src/app/shared/services/ui-service.service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
})
export class BodegaComponent  implements OnInit {

  constructor(private bodegaService: BodegaService, private ui: UiServiceService) { }

  ngOnInit() {
   this.obtenerBodegas();
  }


  bodegas: IBodega[] = [];
  ubicaciones: IUbicacionBodega[] = [];
  selectBodega?: IBodega ;


  isLoading: boolean = false;
  obtenerBodegas() {
    this.isLoading = true;
    this.bodegaService.getBodegas().subscribe(
     {
        next: (response) => {
          this.bodegas = response.data.value;
          this.isLoading = false;
        },
        error: () => {
          this.ui.alertaInformativa('Error al obtener las bodegas');
          this.isLoading = false;
        }
     }
    );
  }

  obtenerUbicacionBodega() {
    this.isLoading = true;
    if (!this.selectBodega) {
      this.ui.alertaInformativa('Debe seleccionar una bodega');
      this.isLoading = false;
      return;
    }
    this.bodegaService.getUbicacionBodega(this.selectBodega.Warehouse).subscribe(
      {
        next: (response) => {
          this.ubicaciones = response.data.value;
          this.isLoading = false;
        },
        error: () => {
          this.ui.alertaInformativa('Error al obtener las ubicaciones de la bodega');
          this.isLoading = false;
        }
      }
    );
  }


}
