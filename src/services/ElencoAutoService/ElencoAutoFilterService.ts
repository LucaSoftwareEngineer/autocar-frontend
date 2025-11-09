import type { IFiltraAuto } from "./IFiltraAuto";

const ElencoAutoFilterService = (props: IFiltraAuto) => {
  console.log(props.filtraBy);
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
    default:
      return props.listaAuto;
      break;
  }
};

export default ElencoAutoFilterService;
