import { useEffect, useState } from "react";
import UserDetailsService from "../services/UserDetailsService/UserDetailsService";
import TokenCheckService from "../services/TokenCheckService/TokenCheckService";

const useUserDetails = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    UserDetailsService().then((res) => {
      setEmail(res.data.email);
    });
    TokenCheckService().catch(() => {
      console.log("non valido");
    });
  }, []);

  return { email };
};

export default useUserDetails;
