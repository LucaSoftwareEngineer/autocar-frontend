import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import RegistraAutoService from "../../services/RegistraAutoService/RegistraAutoService.ts";
import { useNavigate } from "react-router";

const RegistraAutoComponent = () => {

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

    if (numeroRuote == 0) {
      toast.warn("Inserisci il numero delle ruote dell'auto");
      nErr++;
    }

    if (cavalli == 0) {
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
      }).then(() => {
        toast.success("Auto registrata correttamente!");
        setTimeout(() => {
          navigate("/auto/elenco");
        }, 3000);
      }).catch(() => {
        toast.error("Si è verificato un errore, riprova più tardi");
      })
    }
  }

  return (
    <>
      <NavbarComponent />

      <div className="mt-[100px]">
        <div className="max-w-md mx-auto">
          <h1 className="text-[#DF03AF] font-bold mb-[15px]">Inserisci nuova auto consegnata al concessionario</h1>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_marca" id="floating_marca"
                   onChange={(event) => setMarca(event.target.value)}
                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#DF03AF] peer"
                   placeholder=" " required />
            <label htmlFor="floating_marca"
                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#DF03AF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Marca</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_modello" id="floating_modello"
                   onChange={(event) => setModello(event.target.value)}
                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#DF03AF] peer"
                   placeholder=" " required />
            <label htmlFor="floating_modello"
                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#DF03AF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Modello</label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input type="text" name="floating_colore" id="floating_colore"
                   onChange={(event) => setColore(event.target.value)}
                   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#DF03AF] peer"
                   placeholder=" " required />
            <label htmlFor="floating_colore"
                   className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#DF03AF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Colore</label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input type="number" name="floating_numero_ruote" id="floating_numero_ruote"
                     onChange={(event) =>setNumeroRuote(parseInt(event.target.value))}
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#DF03AF] peer"
                     placeholder=" " required />
              <label htmlFor="floating_numero_ruote"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#DF03AF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Numero Ruote</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input type="number" name="floating_cavalli" id="floating_cavalli"
                     onChange={(event) =>setCavalli(parseInt(event.target.value))}
                     className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#DF03AF] peer"
                     placeholder=" " required />
              <label htmlFor="floating_cavalli"
                     className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#DF03AF] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cavalli</label>
            </div>
          </div>
          <button type="button"
                  onClick={registraAutoHandler}
                  className="cursor-pointer text-white bg-[#DF03AF] hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registra auto
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegistraAutoComponent;