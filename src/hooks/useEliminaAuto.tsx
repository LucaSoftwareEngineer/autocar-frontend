import { toast } from "react-toastify";
import EliminaAutoService from "../services/EliminaAutoService/EliminaAutoService";

const useEliminaAuto = () => {
  const eliminaAuto = (id: number) => {
    EliminaAutoService({ id: id }).then(() => {
      toast.success("auto eliminata correttamente");
    });
  };

  return { eliminaAuto };
};

export default useEliminaAuto;
