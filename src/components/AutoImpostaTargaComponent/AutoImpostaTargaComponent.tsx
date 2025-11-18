import { ToastContainer } from "react-toastify";
import useCercaAuto from "../../hooks/useCercaAuto.tsx";
import useImpostaTarga from "../../hooks/useImpostaTarga.tsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";

const AutoImpostaTargaComponent = () => {
  const { elencoAuto } = useCercaAuto();
  const { selezionaAutoHandler, inserisciTargaHandler, clickImpostaTargaHandler } = useImpostaTarga();

  return (
    <>
      <NavbarComponent />
      <div>
        <div className="p-4 sm:ml-64">
          <div className="mt-[60px] md:mt-[50px]">
            <div className="w-[100%] rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="rounded-t-lg bg-[#DF03AF] p-3">
                <a className="cursor-pointer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Imposta targa
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Attraverso questo servizio puoi assegnare una targa alle auto
                  che vengono consegnate al concessionario.
                </p>
                <br />
                <p className="mb-5 font-normal text-gray-700">
                  <select
                    onChange={(event) => selezionaAutoHandler(parseInt(event.target.value))}
                    id="elencoAuto"
                    className="bg-neutral-secondary-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                  >
                    <option value="0" selected>
                      Seleziona un veicolo
                    </option>
                    {elencoAuto.map((auto) => (
                      <option
                        key={auto.id}
                        value={auto.id}
                        className={
                          auto.targa == null ? "text-red-500" : "text-green-500"
                        }
                      >
                        {auto.targa == null
                          ? "Targa non impostata"
                          : "Targa già impostata"}{" "}
                        - {auto.marca} - {auto.modello} - {auto.colore}
                      </option>
                    ))}
                  </select>
                </p>
                <p className="mb-5 font-normal text-gray-700">
                  <input
                    onChange={(event) => {inserisciTargaHandler(event.target.value)}}
                    type="text"
                    id="inputTarga"
                    className="border-gray-200 bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                    placeholder="Inserisci la targa..."
                  />
                </p>
                <p className="mb-5 font-normal text-gray-700">
                  <button
                  onClick={() => clickImpostaTargaHandler()}
                  className="md:w-[300px] me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none"
                >
                  Imposta targa
                </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AutoImpostaTargaComponent;
