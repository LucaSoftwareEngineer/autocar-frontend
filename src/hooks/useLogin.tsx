import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import LoginService from "../services/LoginService/LoginService.ts";
import SecureLS from "secure-ls";

const useLogin = () => {
  const ls = new SecureLS();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    let nErr = 0;

    if (email == "") {
      toast.warn("Inserisci l'indirizzo email...");
      nErr++;
    }

    if (password == "") {
      toast.warn("Inserisci la password...");
      nErr++;
    }

    if (nErr == 0) {
      LoginService({ email: email, password: password })
        .then((response) => {
          if (response.status === 200) {
            ls.set("token", response.data);
            toast.success("Accesso effettuato...");
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }
        })
        .catch(() => {
          toast.error("Email o password errati...");
        });
    }
  };

  return { email, setEmail, password, setPassword, loginHandler };
};

export default useLogin;
