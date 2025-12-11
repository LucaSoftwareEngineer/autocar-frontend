import { IRegistraVenditaRequest } from './IRegistraVenditaRequest';
import SecureLS from "secure-ls";
import { ApiConfig } from "../../api.config";
import axios from 'axios';
import type { IRegistraVenditaResponse } from './IRegistraVenditaResponse';

const RegistraVenditaService = (props:IRegistraVenditaRequest) => {
  const API = new ApiConfig();
  const ls = new SecureLS();

  return axios.post<IRegistraVenditaResponse>(API.registraVendita, props, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ls.get("token").token,
    },
  });
};

export default RegistraVenditaService;
