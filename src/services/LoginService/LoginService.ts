import axios from 'axios';
import { ApiConfig } from "../../api.config.ts";
import { ILoginRequest } from "./ILoginRequest.ts";
import { ILoginResponse } from "./ILoginResponse.ts";

const LoginService = (props:ILoginRequest) => {

  const API = new ApiConfig();
  return axios.post<ILoginResponse>(API.login, props);

};

export default LoginService;