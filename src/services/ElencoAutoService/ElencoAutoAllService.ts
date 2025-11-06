import axios from 'axios';
import { ApiConfig } from "../../api.config.ts";
import SecureLS from "secure-ls";
import { IAuto } from "./IAuto.ts";

const ElencoAutoAllService = () => {

  const ls = new SecureLS();
  const API = new ApiConfig();

  return axios.get<IAuto[]>(API.elencoAutoAll, {
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + ls.get("token").token
    }
  })
};

export default ElencoAutoAllService;