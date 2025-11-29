export class ApiConfig {
  login: string = "http://localhost:8086/api/auth/login";
  tokenCheck: string = "http://localhost:8086/api/user/token/check";
  userDetails: string = "http://localhost:8086/api/user/details";
  registraAuto: string = "http://localhost:8087/api/auto/registra";
  elencoAutoAll: string = "http://localhost:8087/api/auto/elenco";
  reportAuto: string = "http://localhost:8087/api/auto/report";
  impostaTarga: string = "http://localhost:8087/api/auto/imposta/targa";
  eliminaAuto: string = "http://localhost:8087/api/auto/elimina"
  registraVendita: string = "http://localhost:8088/api/vendita/registra"
}
