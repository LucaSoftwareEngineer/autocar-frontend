import { useEffect, useState } from "react";
import UserDetailsService from "../services/UserDetailsService/UserDetailsService";

const useUserDetails = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    UserDetailsService().then((res) => {
      setEmail(res.data.email);
    });
  }, []);

  return { email };
};

export default useUserDetails;
