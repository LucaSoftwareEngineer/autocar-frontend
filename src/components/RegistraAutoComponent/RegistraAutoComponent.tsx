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

      <div className="mt-[100px]">
        <div className="mx-auto max-w-md">
          <h1 className="mb-[15px] font-bold text-[#DF03AF]">
            Inserisci nuova auto consegnata al concessionario
          </h1>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_marca"
              id="floating_marca"
              onChange={(event) => setMarca(event.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#DF03AF] focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_marca"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#DF03AF] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
            >
              Marca
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_modello"
              id="floating_modello"
              onChange={(event) => setModello(event.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#DF03AF] focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_modello"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#DF03AF] rtl:peer-focus:translate-x-1/4"
            >
              Modello
            </label>
          </div>
          <div className="group relative z-0 mb-5 w-full">
            <input
              type="text"
              name="floating_colore"
              id="floating_colore"
              onChange={(event) => setColore(event.target.value)}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#DF03AF] focus:ring-0 focus:outline-none"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_colore"
              className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#DF03AF] rtl:peer-focus:translate-x-1/4"
            >
              Colore
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="group relative z-0 mb-5 w-full">
              <input
                type="number"
                name="floating_numero_ruote"
                id="floating_numero_ruote"
                onChange={(event) =>
                  setNumeroRuote(parseInt(event.target.value))
                }
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#DF03AF] focus:ring-0 focus:outline-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_numero_ruote"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#DF03AF] rtl:peer-focus:translate-x-1/4"
              >
                Numero Ruote
              </label>
            </div>
            <div className="group relative z-0 mb-5 w-full">
              <input
                type="number"
                name="floating_cavalli"
                id="floating_cavalli"
                onChange={(event) => setCavalli(parseInt(event.target.value))}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-[#DF03AF] focus:ring-0 focus:outline-none"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_cavalli"
                className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-[#DF03AF] rtl:peer-focus:translate-x-1/4"
              >
                Cavalli
              </label>
            </div>
          </div>
          <button
            type="button"
            onClick={registraAutoHandler}
            className="w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 focus:outline-none sm:w-auto"
          >
            Registra auto
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default RegistraAutoComponent;
