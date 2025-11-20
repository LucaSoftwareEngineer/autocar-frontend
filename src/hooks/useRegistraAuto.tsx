import { useState } from "react";
import { toast } from "react-toastify";
import RegistraAutoService from "../services/RegistraAutoService/RegistraAutoService.ts";
import { useNavigate } from "react-router";

const useRegistraAuto = () => {
  const navigate = useNavigate();

  const [marca, setMarca] = useState("");
  const [modello, setModello] = useState("");
  const [colore, setColore] = useState("");
  const [numeroRuote, setNumeroRuote] = useState(0);
  const [cavalli, setCavalli] = useState(0);

  const registraAutoHandler = () => {
    let nErr = 0;

    if (marca.trim() == "") {
      toast.warn("Inserisci la marca dell'auto");
      nErr++;
    }

    if (modello.trim() == "") {
      toast.warn("Inserisci il modello dell'auto");
      nErr++;
    }

    if (colore.trim() == "") {
      toast.warn("Inserisci colore dell'auto");
      nErr++;
    }

    if (numeroRuote == 0 || !numeroRuote) {
      toast.warn("Inserisci il numero delle ruote dell'auto");
      nErr++;
    }

    if (cavalli == 0 || !cavalli) {
      toast.warn("Inserisci il numero di cavalli dell'auto");
      nErr++;
    }

    if (nErr == 0) {
      RegistraAutoService({
        marca: marca,
        modello: modello,
        colore: colore,
        numeroRuote: numeroRuote,
        cavalli: cavalli,
      })
        .then(() => {
          toast.success("Auto registrata correttamente!");
          setTimeout(() => {
            navigate("/auto/elenco");
          }, 3000);
        })
        .catch(() => {
          toast.error("Si è verificato un errore, riprova più tardi");
        });
    }
  };


  return { marca, modello, colore, numeroRuote, cavalli, setMarca, setColore, setModello, setNumeroRuote, setCavalli, registraAutoHandler }

};

export default useRegistraAuto;
