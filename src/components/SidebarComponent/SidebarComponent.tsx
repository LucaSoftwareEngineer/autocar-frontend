import { useNavigate } from "react-router";

const SidebarComponent = (props: { sidebarClasse: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <aside
        id="logo-sidebar"
        className={props.sidebarClasse}
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto border-l-[#DF03AF] bg-white px-0 pb-4">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={() => {
                  navigate("/dashboard");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#DF03AF] py-2 pl-[20px] text-[#DF03AF] hover:bg-[#DF03AF] hover:text-white"
              >
                <img
                  src="/icons8-dashboard-94.png"
                  className="h-5 w-5"
                  alt="dashboard-icon"
                />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/auto/registra");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#DF03AF] py-2 pl-[20px] text-[#DF03AF] hover:bg-[#DF03AF] hover:text-white"
              >
                <img
                  src="/icons8-auto.gif"
                  className="h-5 w-5 rounded-[4px]"
                  alt="analisi-lastra-icon"
                />
                <span className="ms-3">Registra auto</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/auto/imposta/targa");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#DF03AF] py-2 pl-[20px] text-[#DF03AF] hover:bg-[#DF03AF] hover:text-white"
              >
                <img
                  src="/icons8-add-properties-48.png"
                  className="h-5 w-5"
                  alt="storico-analisi-icon"
                />
                <span className="ms-3">Imposta targa</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/auto/elenco");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#DF03AF] py-2 pl-[20px] text-[#DF03AF] hover:bg-[#DF03AF] hover:text-white"
              >
                <img
                  src="/icons8-clipboard-list-64.png"
                  className="h-5 w-5"
                  alt="storico-analisi-icon"
                />
                <span className="ms-3">Elenco auto</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/vendita/registra");
                }}
                className="group flex cursor-pointer items-center border-b-[1px] border-b-[#DF03AF] py-2 pl-[20px] text-[#DF03AF] hover:bg-[#DF03AF] hover:text-white"
              >
                <img
                  src="/icons8-land-sales-48.png"
                  className="h-5 w-5"
                  alt="registra-vendita-icon"
                />
                <span className="ms-3">Registra vendita</span>
              </a>
            </li>
          </ul>
          <div className="mt-[25vh] p-[25px] text-center text-gray-500 md:mt-[35vh]">
            <i>Progettato e sviluppato dal Dott. Luca Santoro</i>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;
