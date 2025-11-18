import { useNavigate } from "react-router";
import TokenCheckService from "../services/TokenCheckService/TokenCheckService";

const useTokenCheck = () => {
  const navigate = useNavigate();

  TokenCheckService().catch(() => {
    navigate("/");
  });
};

export default useTokenCheck;
