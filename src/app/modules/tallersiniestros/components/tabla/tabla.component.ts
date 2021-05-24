import { Component, OnInit } from '@angular/core';
import {
  singarcausamotivo,
  singarcausamotivosResponse,
} from '../../services/singarcausamotivo.type';
import { SingarcausamotivoService } from '../../services/singarcausamotivo.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [],
})
export class TablaComponent implements OnInit {
  sgcmData: singarcausamotivo[] = [];

  constructor(private sgcmService: SingarcausamotivoService) {}

  ngOnInit(): void {
    this.sgcmService
      .f_leerJson()
      .subscribe((data: singarcausamotivosResponse) => {
        this.sgcmData = data.data;
      });
  }
}
