import useRegistraAuto from "../../hooks/useRegistraAuto.tsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";
import { ToastContainer } from "react-toastify";

const RegistraAutoComponent = () => {
  const {
    setMarca,
    setColore,
    setModello,
    setNumeroRuote,
    setCavalli,
    registraAutoHandler,
  } = useRegistraAuto();

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
                    Registra auto
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Attraverso questo servizio puoi registrare una nuova auto
                  consegnata al tuo concessionario.
                </p>
                <br />
                <div>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      name="floating_marca"
                      id="floating_marca"
                      onChange={(event) => setMarca(event.target.value)}
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci la marca..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      type="text"
                      name="floating_modello"
                      id="floating_modello"
                      onChange={(event) => setModello(event.target.value)}
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci il modello..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      type="text"
                      name="floating_colore"
                      id="floating_colore"
                      onChange={(event) => setColore(event.target.value)}
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci il colore..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      type="number"
                      name="floating_numero_ruote"
                      id="floating_numero_ruote"
                      onChange={(event) =>
                        setNumeroRuote(parseInt(event.target.value))
                      }
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci il numero di ruote..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <input
                      type="number"
                      name="floating_cavalli"
                      id="floating_cavalli"
                      onChange={(event) =>
                        setCavalli(parseInt(event.target.value))
                      }
                      className="bg-neutral-secondary-medium border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand placeholder:text-body block w-full border border-gray-200 px-3 py-2.5 text-sm shadow-xs md:w-[300px]"
                      placeholder="Inserisci il numero di cavalli..."
                    />
                  </p>
                  <p className="mb-5 font-normal text-gray-700">
                    <button
                      onClick={registraAutoHandler}
                      className="me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none md:w-[300px]"
                    >
                      Registra auto
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

export default RegistraAutoComponent;
