import { Component, OnInit, Input } from '@angular/core';
import {
  singarcausamotivo,
  singarcausamotivosResponse,
  codigoDescripcion,
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

  garantiasUnicas: codigoDescripcion[] = [];
  garantiasSeleccionadas: number[] = [];
  causasUnicas: codigoDescripcion[] = [];
  motivosUnicos: codigoDescripcion[] = [];

  constructor(private sgcmService: SingarcausamotivoService) {}

  ngOnInit(): void {
    this.loading = true;
    this.sgcmService
      .f_leerJson()
      .subscribe((data: singarcausamotivosResponse) => {
        this.sgcmData = data.data;

        // transformamos los datos de entrada

        this.sgcmData.forEach((item) => {
          /*
            Transformamos los datos de entrada
          */
          // (item.date = new Date(item.date))  -- transformamos una fecha
          item.garantia = item.garantia.trim();
          item.causa = item.causa.trim();
          item.motivo = item.motivo.trim();

          /*
            Creamos las listas de valores unicos para garantias, causas y motivos
          */

          // construim la llista de garanties
          let aux: codigoDescripcion = {
            cvalor: item.cod_garantia,
            tvalor: item.garantia,
          };
          this.garantiasUnicas.push(aux);

          this.causasUnicas.push({
            cvalor: item.cod_causa,
            tvalor: item.causa,
          });

          this.motivosUnicos.push({
            cvalor: item.cod_motivo,
            tvalor: item.motivo,
          });
        });

        // me quedo con valores unicos
        this.garantiasUnicas = this.garantiasUnicas.filter(
          (item, i, arr) => arr.findIndex((t) => t.cvalor === item.cvalor) === i
        );

        this.causasUnicas = this.causasUnicas.filter(
          (item, i, arr) => arr.findIndex((t) => t.cvalor === item.cvalor) === i
        );

        this.motivosUnicos = this.motivosUnicos.filter(
          (item, i, arr) => arr.findIndex((t) => t.cvalor === item.cvalor) === i
        );
      });

    this.columnas = [
      { field: 'scaumot', header: 'Scaumot' },
      { field: 'cod_garantia', header: 'Cód. Garantía' },
      { field: 'garantia', header: 'Garantía' },
      { field: 'cod_causa', header: 'Cód. causa' },
      { field: 'causa', header: 'Causa' },
      { field: 'cod_motivo', header: 'Cód. Motivo' },
      { field: 'motivo', header: 'Motivo' },
      { field: 'cod_formula', header: 'Cód. Formula' },
      { field: 'Formula', header: 'Formula' },
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

  hidden_scaumot: boolean = false;

  hidden_columnas: { columna: string; ocultar: boolean; inactive?: boolean }[] =
    [
      { columna: 'Scaumot', ocultar: false },
      { columna: 'Garantía', ocultar: false, inactive: true },
      { columna: 'Causa', ocultar: false },
      { columna: 'Motivo', ocultar: false },
      { columna: 'Formula', ocultar: false },
    ];

  _selectedColumns: any[] = this.hidden_columnas;

  @Input() get selectedColumns(): any[] {
    //return this._selectedColumns;
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    /*     this._selectedColumns = this.hidden_columnas.filter((hidden_columnas) =>
      val.includes(hidden_columnas)
    ); */
    //console.log('set selectedColumns', val);

    this.hidden_columnas.forEach((a, idx) => {
      let trobat: boolean = false;

      val.forEach((b, index) => {
        if (a.columna === b.columna) {
          trobat = true;
        }
      });

      //   console.log(val, trobat, idx);

      if (trobat) {
        this.hidden_columnas[idx].ocultar = false;
      } else {
        this.hidden_columnas[idx].ocultar = true;
      }
    });
  }
}
