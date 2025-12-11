import type { IFiltraAuto } from "./IFiltraAuto";

const ElencoAutoFilterService = (props: IFiltraAuto) => {
  switch (props.filtraBy) {
    case "TARGA":
      return props.listaAuto.filter((auto) =>
        auto.targa?.includes(props.filtro.toString()),
      );
      break;
    case "MARCA":
      return props.listaAuto.filter((auto) =>
        auto.marca.includes(props.filtro.toString()),
      );
      break;
    case "MODELLO":
      return props.listaAuto.filter((auto) =>
        auto.modello.includes(props.filtro.toString()),
      );
      break;
    case "COLORE":
      return props.listaAuto.filter((auto) =>
        auto.colore.includes(props.filtro.toString()),
      );
      break;
    case "NUMERO_RUOTE":
      return props.listaAuto.filter(
        (auto) => Number(auto.numeroRuote) === Number(props.filtro),
      );
      break;
    case "CAVALLI":
      return props.listaAuto.filter((auto) => auto.cavalli === props.filtro);
      break;
    case "STATO":
      if (props.filtro == "Venduta") {
        return props.listaAuto.filter((auto) => auto.venduta == true);
      } else if (props.filtro == "Disponibile") {
        return props.listaAuto.filter((auto) => auto.venduta == false || auto.venduta == null);
      }
      break;
    default:
      return props.listaAuto;
      break;
  }
};

export default ElencoAutoFilterService;
