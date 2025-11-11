import SecureLS from "secure-ls";
import { ApiConfig } from "../../api.config";
import axios from "axios";
import type { IReportAutoResponse } from "./IReportAutoResponse";

const ReportAutoService = () => {
  const API = new ApiConfig();
  const ls = new SecureLS();

  return axios.get<IReportAutoResponse>(API.reportAuto, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + ls.get("token").token,
    },
  });
};

export default ReportAutoService;
