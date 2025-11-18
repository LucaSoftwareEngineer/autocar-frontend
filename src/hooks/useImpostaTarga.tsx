import { useState } from "react";
import ImpostaTargaService from "../services/ImpostaTargaService/ImpostaTargaService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const useImpostaTarga = () => {
  const navigate = useNavigate();

  const [idAuto, setIdAuto] = useState<number>(0);
  const [targa, setTarga] = useState<string>("");

  const selezionaAutoHandler = (idAuto: number) => {
    setIdAuto(idAuto);
    console.log(idAuto);
  };

  const inserisciTargaHandler = (targa: string) => {
    setTarga(targa);
    console.log(targa);
  };

  const clickImpostaTargaHandler = () => {
    let nErr = 0;
    const req = { idAuto: idAuto, targa: targa };

    if (idAuto == 0) {
      toast.warn("Seleziona un veicolo...");
      nErr++;
    }

    if (targa == "") {
      toast.warn("inserisci la targa...");
      nErr++;
    }

    if (nErr == 0) {
      ImpostaTargaService(req)
        .then(() => {
          toast.success("Targa impostata correttamente...");
          setTimeout(() => {
            navigate("/auto/elenco");
          }, 2000);
        })
        .catch(() => {
          toast.error("Riprova più tardi...");
        });
    }
  };

  return {
    selezionaAutoHandler,
    inserisciTargaHandler,
    clickImpostaTargaHandler,
  };
};

export default useImpostaTarga;
