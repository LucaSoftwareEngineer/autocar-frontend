import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";
import elencoAutoAllService from "../../services/ElencoAutoService/ElencoAutoAllService.ts";
import { useEffect, useState } from "react";
import { IAuto } from "../../services/ElencoAutoService/IAuto.ts";
import ElencoAutoFilterService from "../../services/ElencoAutoService/ElencoAutoFilterService.ts";

const ElencoAutoComponent = () => {
  const [elencoAuto, setElencoAuto] = useState<IAuto[]>([]);
  const [filtroRicercaByColonna, setFiltroRicercaByColonna] =
    useState<string>("");
  const [filtroRicerca, setFiltroRicerca] = useState<string | number>("");

  const [isFiltrato, setIsFiltrato] = useState<boolean>(false);

  useEffect(() => {
    elencoAutoAllService().then((res) => {
      setElencoAuto(res.data);
    });
  }, []);

  const handlerCercaAutoOnChange = (filtroRicerca: string) => {
    setFiltroRicerca(filtroRicerca);
  };

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

  const colonne = [
    { key: "TARGA", value: "Targa" },
    { key: "MARCA", value: "Marca" },
    { key: "MODELLO", value: "Modello" },
    { key: "COLORE", value: "Colore" },
    { key: "NUMERO_RUOTE", value: "N. Ruote" },
    { key: "CAVALLI", value: "Cavalli" },
  ];

  return (
    <>
      <NavbarComponent />

      <div className="md:m-[30px] md:ml-[290px]">
        <div className="relative mt-[80px] overflow-x-auto shadow-md sm:rounded-lg">
          <div>
            <form className="mb-[20px] flex p-[10px] md:inline-flex">
              <div id="select-filtro" className="w-[200px] pr-[20px]">
                <select
                  onChange={(event) => {
                    handletSelectColonnaOnChange(event.target.value);
                  }}
                  id="countries"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option selected>Seleziona la colonna</option>
                  {colonne.map((colonna) => {
                    return <option value={colonna.key}>{colonna.value}</option>;
                  })}
                </select>
              </div>
              <div id="input-filtro" className="w-[400px]">
                <label className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Search
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
                    <svg
                      className="h-4 w-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search-auto"
                    onChange={(event) =>
                      handlerCercaAutoOnChange(event.target.value)
                    }
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Cerca marca, modello, colore..."
                    required
                  />
                  {isFiltrato ? null : (
                    <button
                      type="submit"
                      onClick={(event) => {
                        event.preventDefault();
                        handlerCercaAutoOnSubmit();
                      }}
                      className="absolute end-1.5 bottom-1.5 cursor-pointer rounded-lg bg-[#DF03AF] px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    >
                      Cerca
                    </button>
                  )}
                </div>
              </div>
              {isFiltrato ? (
                <div id="button-annulla-filtro" className="w-[100px]">
                  {isFiltrato ? (
                    <button
                      onClick={handlerResetFiltro}
                      type="button"
                      className="me-2 mb-2 rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:ring-4 focus:ring-red-300 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Annulla
                    </button>
                  ) : null}
                </div>
              ) : null}
            </form>
          </div>

          <table className="w-full text-left text-sm text-gray-500 rtl:text-right">
            <thead className="bg-[#DF03AF] text-xs text-white uppercase">
              <tr>
                {colonne.map((colonna) => {
                  return (
                    <th scope="col" className="px-6 py-3">
                      {colonna.value}
                    </th>
                  );
                })}
                <th scope="col" className="px-6 py-3">
                  Opzioni
                </th>
              </tr>
            </thead>
            <tbody>
              {elencoAuto?.map((auto) => (
                <tr className="border-b border-gray-200 odd:bg-white even:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-gray-900"
                  >
                    {auto.targa != null ? auto.targa : "Non assegnata"}
                  </th>
                  <td className="px-6 py-4">{auto.marca}</td>
                  <td className="px-6 py-4">{auto.modello}</td>
                  <td className="px-6 py-4">{auto.colore}</td>
                  <td className="px-6 py-4">{auto.numeroRuote}</td>
                  <td className="px-6 py-4">{auto.cavalli}</td>
                  <td className="px-6 py-4"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ElencoAutoComponent;
