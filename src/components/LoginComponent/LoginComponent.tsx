import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
import LoginService from "../../services/LoginService/LoginService.ts";
import SecureLS from 'secure-ls';

const LoginComponent = () => {

  const ls = new SecureLS();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {

    let nErr = 0;

    if (email == '') {
      toast.warn("Inserisci l'indirizzo email...");
      nErr++;
    }

    if (password == '') {
      toast.warn("Inserisci la password...");
      nErr++;
    }

    if (nErr == 0) {
      LoginService({ email: email, password: password })
        .then((response) => {
          if (response.status === 200) {
            ls.set('token', response.data);
            toast.success("Accesso effettuato...");
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          }
        })
        .catch(() => {
          toast.error("Email o password errati...");
        })
    }
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
          <a className="mb-6 flex items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <img
              className="mr-2 h-8 w-8 rounded-[8px]"
              src="./logo.png"
              alt="logo"
            />
            <span className="text-[#DF03AF]">Autocar</span>
            <span className="ml-[8px]">Tool per Concessionario</span>
          </a>
          <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0 dark:border dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
              <h1 className="text-xl leading-tight font-bold tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Accedi alla tua area riservata
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Inserisci email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                    Inserisci password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 cursor-pointer rounded border border-gray-300 bg-gray-50 focus:ring-3 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label className="text-gray-500 dark:text-gray-300">
                        Salva credenziali
                      </label>
                    </div>
                  </div>
                  <a className="text-primary-600 dark:text-primary-500 cursor-pointer text-sm font-medium hover:underline">
                    Password dimenticata?
                  </a>
                </div>
                <button
                  onClick={() => {
                    loginHandler();
                  }}
                  type="submit"
                  className="me-2 mb-2 w-full cursor-pointer rounded-lg bg-[#DF03AF] px-5 py-2.5 text-sm font-medium text-white hover:bg-black focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Accedi
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default LoginComponent;