import NavbarComponent from "../NavbarComponent/NavbarComponent";

const VenditaRegistraComponent = () => {
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
                  Attraverso questo servizio puoi registrare come venduta una
                  delle auto presenti nel tuo concessionario.
                </p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VenditaRegistraComponent;
