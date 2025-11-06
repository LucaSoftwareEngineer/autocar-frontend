import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";
import elencoAutoAllService from "../../services/ElencoAutoService/ElencoAutoAllService.ts";
import { useEffect, useState } from "react";
import { IAuto } from "../../services/ElencoAutoService/IAuto.ts";

const ElencoAutoComponent = () => {

  const [elencoAuto, setElencoAuto] = useState<IAuto[]>([]);

  useEffect(() => {
      elencoAutoAllService().then(res => {
        setElencoAuto(res.data);
      });
  }, [])

  return (
    <>
      <NavbarComponent />

      <div className="mt-[60px] md:ml-[260px] md:mr-[30px]">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Modello
              </th>
              <th scope="col" className="px-6 py-3">
                Marca
              </th>
              <th scope="col" className="px-6 py-3">
                Colore
              </th>
              <th scope="col" className="px-6 py-3">
                N. Ruote
              </th>
              <th scope="col" className="px-6 py-3">
                Cavalli
              </th>
              <th scope="col" className="px-6 py-3">
                Opzioni
              </th>
            </tr>
            </thead>
            <tbody>
            {
              elencoAuto?.map(auto => (
                <tr className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {auto.modello}
                  </th>
                  <td className="px-6 py-4">
                    {auto.marca}
                  </td>
                  <td className="px-6 py-4">
                    {auto.colore}
                  </td>
                  <td className="px-6 py-4">
                    {auto.numeroRuote}
                  </td>
                  <td className="px-6 py-4">
                    {auto.cavalli}
                  </td>
                  <td className="px-6 py-4">

                  </td>
                </tr>
              ))
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ElencoAutoComponent;