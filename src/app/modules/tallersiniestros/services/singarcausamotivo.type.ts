export interface singarcausamotivosResponse {
  data: singarcausamotivo[];
}

export interface singarcausamotivo {
  scaumot: number;
  cod_garantia: number;
  garantia: string;
  cod_causa: number;
  causa: string;
  cod_motivo: number;
  motivo: string;
  cod_formula: string;
  provision_inicial: string;
}
