import SecureLS from "secure-ls";
import { ApiConfig } from "../../api.config";
import axios from "axios";
import type { IUserDetailsResponse } from "./IUserDetailsResponse";

const UserDetailsService = () => {
  const API = new ApiConfig();
  const ls = new SecureLS();

  return axios.get<IUserDetailsResponse>(API.userDetails, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ls.get("token").token,
    },
  });
};

export default UserDetailsService;
