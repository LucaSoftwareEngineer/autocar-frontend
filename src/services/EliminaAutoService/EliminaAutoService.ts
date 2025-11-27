import SecureLS from "secure-ls";
import { ApiConfig } from "../../api.config";
import axios from "axios";
import type { IEliminaAutoRequest } from "./IEliminaAutoRequest";

const EliminaAutoService = (props:IEliminaAutoRequest) => {
  const ls = new SecureLS();
  const API = new ApiConfig();

  return axios.delete(
    API.eliminaAuto.concat(`?id=${props.id}`),
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get("token").token
      }
    }
  );
};

export default EliminaAutoService;
