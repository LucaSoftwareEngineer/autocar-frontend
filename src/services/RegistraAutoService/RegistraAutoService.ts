import axios from 'axios';
import { IRegistraAutoRequest } from "./IRegistraAutoRequest.ts";
import { ApiConfig } from "../../api.config.ts";
import SecureLS from "secure-ls";
import { IRegistraAutoResponse } from "./IRegistraAutoResponse.ts";

const RegistraAutoService = (props:IRegistraAutoRequest) => {
  const ls = new SecureLS();
  const API = new ApiConfig();
  console.log(ls.get("token").token);
  return axios.post<IRegistraAutoResponse>(
    API.registraAuto,
    props,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + ls.get("token").token
      }
    }
  )
};

export default RegistraAutoService;