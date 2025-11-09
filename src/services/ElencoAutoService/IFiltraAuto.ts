import type { IAuto } from "./IAuto";

export interface IFiltraAuto {
  listaAuto: IAuto[];
  filtro: string | number;
  filtraBy: string;
}
