import { getBaseUrl as BuzeiraGetBaseUrl} from './Buzeira/Config/Enviroment.js'
import { getBaseUrl as RobertRealizaGetBaseUrl} from './RobertRealiza/Config/Enviroment.js'

export function getCustomerBaseUrl(){
  //Buzeira
  if(getCustomer() == 'Buzeira')
    return BuzeiraGetBaseUrl();

  //Robert
  return RobertRealizaGetBaseUrl();
}

export function getCustomer(){
    return __ENV.CUSTOMER || 'Buzeira';
}

export function getCampanha(){
    return __ENV.CAMPANHA || 'jujuba-malvada';
}

export function getToken(){
  return __ENV.TOKEN || 'zcMnb5wgQRAnoW5zZlfTd3UYmXDENTM21bJT02jn';
}

export function getCookie(){
  return __ENV.Cookie || 'XSRF-TOKEN=eyJpdiI6IlFnTnhKNEpjbnE3dUIzVnh0V09VNUE9PSIsInZhbHVlIjoiWFR0eWtSZEhZV3RBcDhJUXBUZml0UDJyaXZhamZFMU5EeWRSWlhuRlkxa28vemw5dll0NmhoelBlR3ZsNE5jYU10ODBMcU5rNG8wRm1CdmxkRHFHQVpiNk5mRWZsalpMT1g1dGk1QUp0RDIrY3lFb2V5WWpNTkdMdWthNVB1OWwiLCJtYWMiOiJhMWJiMTdlZDJiODAwNzdhNWNlOWFlYzZlMzE2ZmQwYzNiZThhMzQ5YWFlMmY3YmQ2ZTQyMjVhYTg4YTBhNzA0IiwidGFnIjoiIn0%3D; base_laravel_session=eyJpdiI6IlZMc2RzQjExSkhVNUhObDFMSVJSMWc9PSIsInZhbHVlIjoiUHBCOFZIZ0pGdExabktGajNqNkhPRElIRFZjelRteTcwOG9tK2N6YjFaUWdvMVlXd1RXR3haV2VwbE4rcjVyeDhRUmEvYS85SnE4akRVQm9oYlByd1d4bG8yZHlBTlk2dkJWQW8wWUtGbWNFRHZ3R2xjekExZUlxeUdIcGJsNHAiLCJtYWMiOiIwYWNjMTg5MzVlYWI0MzM5ZjUxNTQ1OTFlZTZkNjg0MTlkYTQ4ZDdlMjhmZThlNTUxNzUyMWQ3MDNiMDYzODA3IiwidGFnIjoiIn0%3D';
}