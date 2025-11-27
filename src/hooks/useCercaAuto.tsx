import { useEffect, useState } from "react";
import { IAuto } from "../services/ElencoAutoService/IAuto.ts";
import ElencoAutoFilterService from "../services/ElencoAutoService/ElencoAutoFilterService.ts";
import elencoAutoAllService from "../services/ElencoAutoService/ElencoAutoAllService.ts";
import useEliminaAuto from "./useEliminaAuto.tsx";

const useCercaAuto = () => {
  const [elencoAuto, setElencoAuto] = useState<IAuto[]>([]);
  const [filtroRicercaByColonna, setFiltroRicercaByColonna] =
    useState<string>("");
  const [filtroRicerca, setFiltroRicerca] = useState<string | number>("");
  const [isFiltrato, setIsFiltrato] = useState<boolean>(false);
  const { eliminaAuto } = useEliminaAuto();

  const handlerCercaAutoOnChange = (filtroRicerca: string) => {
    setFiltroRicerca(filtroRicerca);
  };

  useEffect(() => {
    elencoAutoAllService().then((res) => {
      setElencoAuto(res.data);
    });
  }, []);

  const handletSelectColonnaOnChange = (colonnaSelezionata: string) => {
    setFiltroRicercaByColonna(colonnaSelezionata);
  };

  const handlerCercaAutoOnSubmit = () => {
    if (filtroRicerca != undefined && filtroRicercaByColonna != undefined) {
      setElencoAuto(
        ElencoAutoFilterService({
          listaAuto: elencoAuto,
          filtro: filtroRicerca,
          filtraBy: filtroRicercaByColonna,
        }),
      );
      setIsFiltrato(true);
    }
  };

  const handlerResetFiltro = () => {
    setElencoAuto([]);
    elencoAutoAllService().then((res) => {
      setElencoAuto(res.data);
    });
    setIsFiltrato(false);
  };

  const handlerEliminaAuto = (id: number) => {
    eliminaAuto(id);
    elencoAutoAllService().then((res) => {
      setElencoAuto(res.data);
    });
  };

  return {
    elencoAuto,
    isFiltrato,
    handlerCercaAutoOnChange,
    handletSelectColonnaOnChange,
    handlerCercaAutoOnSubmit,
    handlerResetFiltro,
    handlerEliminaAuto,
  };
};

export default useCercaAuto;
