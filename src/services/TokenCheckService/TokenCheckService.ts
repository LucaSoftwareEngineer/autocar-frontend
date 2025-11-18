import SecureLS from "secure-ls";
import { ApiConfig } from "../../api.config";
import axios from "axios";

const TokenCheckService = () => {
  const ls = new SecureLS();
  const API = new ApiConfig();

  return axios.post(API.tokenCheck, {}, {
    headers: {
      Authorization: "Bearer " + ls.get("token").token,
    },
  });
};

export default TokenCheckService;
