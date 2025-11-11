import { useEffect, useState } from "react";
import ReportAutoService from "../services/ReportAutoService/ReportAutoService";
import type { IReportAutoResponse } from "../services/ReportAutoService/IReportAutoResponse";

const useReportConcessionario = () => {
  const [report, setReport] = useState<IReportAutoResponse>({
    autoConTarga: 0,
    autoSenzaTarga: 0,
    autoComplessive: 0,
  });

  useEffect(() => {
    ReportAutoService().then((res) => setReport(res.data));
  }, []);

  return { report };
};

export default useReportConcessionario;
