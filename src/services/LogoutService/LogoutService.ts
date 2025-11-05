import SecureLS from "secure-ls";

const LogoutService = () => {
  const ls = new SecureLS();
  ls.remove("token");
};

export default LogoutService;