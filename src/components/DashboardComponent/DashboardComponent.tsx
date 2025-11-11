import useReportConcessionario from "../../hooks/useReportConcessionario.tsx";
import useUserDetails from "../../hooks/useUserDetails.tsx";
import NavbarComponent from "../NavbarComponent/NavbarComponent.tsx";

const DashboardComponent = () => {
  const { email } = useUserDetails();
  const { report } = useReportConcessionario();

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
                    Dashboard
                  </h5>
                </a>
              </div>
              <div className="p-5">
                <p className="mb-0 font-normal text-gray-700">
                  Benvenuto nella tua Dashboard, in questa pagina puoi vedere i
                  report delle auto presenti nel tuo concessionario.
                  <br />
                  Utilizzando la sidebar (il menù alla tua sinistra) puoi
                  registrare una nuova auto, impostare una targa oppure vedere
                  l'elenco delle auto presenti nel concessionario.
                </p>
                <br />
              </div>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className="mt-[25px] w-[100%] rounded-lg border border-gray-200 bg-white shadow-sm md:w-[98%]">
                <div className="rounded-t-lg bg-[#DF03AF] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Dettagli Utente
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <table>
                    <tbody>
                      <tr>
                        <td className="p-[5px] text-[#DF03AF]">
                          <b>Email:</b>
                        </td>
                        <td className="p-[5px] pl-[20px] text-gray-950">
                          {email}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#DF03AF]">
                          <b>Tipologia di account:</b>
                        </td>
                        <td className="p-[5px] pl-[20px] text-gray-950">
                          Amministratore
                        </td>
                      </tr>
                      <tr>
                        <td className="p-[5px] text-[#DF03AF]">
                          <b>Foto profilo:</b>
                        </td>
                        <td className="p-[5px] pl-[20px] text-gray-950">
                          <img
                            src="./user-profile-foto.PNG"
                            className="w-[30px]"
                            alt="user-profile-photo.PNG"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-[25px] w-[100%] rounded-lg border border-gray-200 bg-white shadow-sm md:w-[100%]">
                <div className="rounded-t-lg bg-[#DF03AF] p-3">
                  <a className="cursor-pointer">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      Report
                    </h5>
                  </a>
                </div>
                <div className="p-5">
                  <div className="w-[100%] md:w-[100%] lg:w-[100%]">
                    <table>
                      <tbody>
                        <tr>
                          <td className="p-[5px] text-[#DF03AF]">
                            <b>Numero di auto senza targa:</b>
                          </td>
                          <td className="p-[5px] pl-[20px] text-gray-950">
                            {report.autoSenzaTarga}
                            &nbsp; auto
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#DF03AF]">
                            <b>Numero di auto con targa:</b>
                          </td>
                          <td className="p-[5px] pl-[20px] text-gray-950">
                            {report.autoConTarga}
                            &nbsp; auto
                          </td>
                        </tr>
                        <tr>
                          <td className="p-[5px] text-[#DF03AF]">
                            <b>Numero totale di auto:</b>
                          </td>
                          <td className="p-[5px] pl-[20px] text-gray-950">
                            {report.autoComplessive}
                            &nbsp; auto
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardComponent;
