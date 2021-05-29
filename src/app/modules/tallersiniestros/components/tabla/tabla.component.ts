import { Component, OnInit } from '@angular/core';
import {
  singarcausamotivo,
  singarcausamotivosResponse,
} from '../../services/singarcausamotivo.type';
import { SingarcausamotivoService } from '../../services/singarcausamotivo.service';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  providers: [MessageService],
  styles: [],
})
export class TablaComponent implements OnInit {
  sgcmData: singarcausamotivo[] = [];
  columnas: { field: string; header: string }[] = [];
  loading: boolean = true;
  busquedaGlobal: string = '';
  busquedaGlobal2: string = '';

  constructor(private sgcmService: SingarcausamotivoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.sgcmService
      .f_leerJson()
      .subscribe((data: singarcausamotivosResponse) => {
        this.sgcmData = data.data;

        /*
            Aqui lo que hace es corregir la fecha
      
        this.sgcmData.forEach(
          (sgcmData) => (sgcmData.date = new Date(sgcmData.date))
        );
          */
      });

    this.columnas = [
      { field: 'scaumot', header: 'SCauMot' },
      { field: 'cod_garantia', header: 'Código Garantía' },
      { field: 'garantia', header: 'Garantía' },
      { field: 'cod_causa', header: 'Código causa' },
      { field: 'causa', header: 'Causa' },
      { field: 'cod_motivo', header: 'Código Motivo' },
      { field: 'motivo', header: 'Motivo' },
    ];

    //this.sleep(9000);

    this.loading = false;
  }

  sleep(milliseconds: number): void {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  clear(table: Table) {
    this.busquedaGlobal = '';
    table.clear();
  }
}
