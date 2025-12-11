import { ToastContainer } from "react-toastify";
import useCercaAuto from "../../hooks/useCercaAuto";
import useRegistraVendita from "../../hooks/useRegistraVendita";
import NavbarComponent from "../NavbarComponent/NavbarComponent";

const VenditaRegistraComponent = () => {
  const { elencoAuto } = useCercaAuto();
  const {
    setNominativoCliente,
    setPrezzo,
    setIdAuto,
    setDataAcquisto,
    clickRegistraVenditaHandler,
  } = useRegistraVendita();

  return (
    <>
      <NavbarComponent />
      <div>
        <div className="p-4 sm:ml-64">
          <div className="mt-[60px] md:mt-[50px]">
            <div className="w-full rounded-lg border border-gray-200 bg-white shadow-sm">
              <div className="rounded-t-lg bg-[#DF03AF] p-3">
                <a className="cursor-pointer">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                    Registra Vendita
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Attraverso questo servizio puoi registrare le vendite delle
                  auto presenti nel tuo concessionario.
                </p>
                <br />
                <div>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      name="nominativo_cliente"
                      id="nominativo_cliente"
                      type="text"
                      onChange={(event) =>
                        setNominativoCliente(event.target.value)
                      }
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci nominativo del cliente..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      name="prezzo"
                      id="prezzo"
                      type="number"
                      onChange={(event) =>
                        setPrezzo(parseFloat(event.target.value))
                      }
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci prezzo..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <select
                      onChange={(event) =>
                        setIdAuto(parseInt(event.target.value))
                      }
                      id="elencoAuto"
                      className="bg-neutral-secondary-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                    >
                      <option value="0" selected>
                        Seleziona un veicolo
                      </option>
                      {elencoAuto
                        .filter((auto) => auto.targa != null)
                        .filter((auto) => auto.venduta == false || auto.venduta == null)
                        .map((auto) => (
                          <option key={auto.id} value={auto.id}>
                            {auto.targa} [{auto.marca} - {auto.modello} -{" "}
                            {auto.colore}]
                          </option>
                        ))}
                    </select>
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <i className="p-1 text-sm">Inserisci data dell'acquisto</i>
                    <br />
                    <input
                      name="data_acquisto"
                      id="data_acquisto"
                      type="date"
                      onChange={(event) => setDataAcquisto(event.target.value)}
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci data dell'acquisto..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <button
                      onClick={() => clickRegistraVenditaHandler()}
                      className="me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none md:w-[300px]"
                    >
                      Registra vendita
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default VenditaRegistraComponent;
