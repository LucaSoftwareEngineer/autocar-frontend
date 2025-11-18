import axios from "axios";
import { ApiConfig } from "../../api.config";
import type { ISetTargaRequest } from "./ISetTargaRequest";
import type { ISetTargaResponse } from "./ISetTargaResponse";
import SecureLS from "secure-ls";

const ImpostaTargaService = (props: ISetTargaRequest) => {

  const API = new ApiConfig();
  const ls = new SecureLS();

  return axios.post<ISetTargaResponse>(API.impostaTarga, props, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ls.get("token").token,
    },
  });
};

export default ImpostaTargaService;
