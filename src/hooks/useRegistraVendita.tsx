import { useState } from "react";
import type { IRegistraVenditaRequest } from "../services/RegistraVenditaService/IRegistraVenditaRequest";
import RegistraVenditaService from "../services/RegistraVenditaService/RegistraVenditaService";
import { toast } from "react-toastify";

const useRegistraVendita = () => {
  const [nominativoCliente, setNominativoCliente] = useState<string>("");
  const [prezzo, setPrezzo] = useState<number>(0);
  const [idAuto, setIdAuto] = useState<number>(0);
  const [dataAcquisto, setDataAcquisto] = useState<string>("");

  const clickRegistraVenditaHandler = () => {
    let nErr = 0;

    if (nominativoCliente.trim() == "") {
      toast.warn("Inserisci nominativo cliente...");
    }

    if (!prezzo || prezzo == 0) {
      toast.warn("Inserisci prezzo...");
      nErr++;
    }

    if (idAuto == 0) {
      toast.warn("Seleziona un veicolo...");
      nErr++;
    }

    if (dataAcquisto.trim() == "") {
      toast.warn("Inserisci data di acquisto...");
      nErr++;
    }

    if (nErr == 0) {
      const json: IRegistraVenditaRequest = {
        nominativoCliente: nominativoCliente,
        prezzo: prezzo,
        idAuto: idAuto,
        dataAcquisto: dataAcquisto,
      };

      RegistraVenditaService(json).then((res) => {
        if (res.data.idVendita > 0) {
          toast.success("Vendita registrata");
        }
      });
    }
  };

  return {
    nominativoCliente,
    setNominativoCliente,
    prezzo,
    setPrezzo,
    idAuto,
    setIdAuto,
    dataAcquisto,
    setDataAcquisto,
    clickRegistraVenditaHandler,
  };
};

export default useRegistraVendita;
