import { useNavigate } from "react-router";

const SidebarComponent = (props:{sidebarClasse:string}) => {

  const navigate = useNavigate();

  return (
    <>
      <aside
        id="logo-sidebar"
        className={props.sidebarClasse}
        aria-label="Sidebar"
      >
        <div className="h-full px-0 pb-4 overflow-y-auto bg-white border-l-[#DF03AF]">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                onClick={() => {navigate("/dashboard")}}
                className="border-b-[#DF03AF] border-b-[1px] cursor-pointer flex items-center py-2 pl-[20px] text-[#DF03AF] hover:text-white hover:bg-[#DF03AF] group"
              >
                <img src="/icons8-dashboard-94.png" className="w-5 h-5" alt="dashboard-icon" />
                <span className="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {navigate("/auto/registra")}}
                className="border-b-[#DF03AF] border-b-[1px] cursor-pointer flex items-center py-2 pl-[20px] text-[#DF03AF] hover:text-white hover:bg-[#DF03AF] group"
              >
                <img src="/icons8-auto.gif" className="w-5 h-5 rounded-[4px]" alt="analisi-lastra-icon" />
                <span className="ms-3">Registra auto</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {navigate("/auto/imposta/targa")}}
                className="border-b-[#DF03AF] border-b-[1px] cursor-pointer flex items-center py-2 pl-[20px] text-[#DF03AF] hover:text-white hover:bg-[#DF03AF] group"
              >
                <img src="/icons8-add-properties-48.png" className="w-5 h-5" alt="storico-analisi-icon" />
                <span className="ms-3">Imposta targa</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => {navigate("/auto/elenco")}}
                className="border-b-[#DF03AF] border-b-[1px] cursor-pointer flex items-center py-2 pl-[20px] text-[#DF03AF] hover:text-white hover:bg-[#DF03AF] group"
              >
                <img src="/icons8-clipboard-list-64.png" className="w-5 h-5" alt="storico-analisi-icon" />
                <span className="ms-3">Elenco auto</span>
              </a>
            </li>
          </ul>
          <div className="md:mt-[35vh] mt-[25vh] p-[25px] text-center text-gray-500"><i>Progettato e sviluppato dal Dott. Luca Santoro</i></div>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;